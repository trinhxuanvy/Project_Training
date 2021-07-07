var express = require('express');
var oracledb = require('../backend/database');
var setup = require('../setup/setup')
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    let data = await oracledb.getCheckData(`select * from giaovien`);
    let decoded = oracledb.verifyData(data);

    if (decoded != 0) {
        console.log(oracledb.getNumData(decoded['result'], 1, 1));
    }
    res.render('index', { id: 'test' });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/logout', function (req, res, next) {
    res.redirect('/login');
});

router.get('/register', function (req, res, next) {
    res.render('register');
});

router.get('/courses/technical/:idcourse', function (req, res, next) {
    res.render('technical-page');
});

router.get('/courses/technical/:idcourse/checkin', function (req, res, next) {
    res.render('technical-detail-page');
});

router.get('/personal', function (req, res, next) {
    res.render('personal');
});

router.get('/personal/infor', function (req, res, next) {
    res.render('personal-infor');
});

router.get('/personal/technical', async function (req, res, next) {
    let typeLink = 0; // choose chematic
    let getIDCourse = -1;

    try {
        let query = `select * from hoadonnhomhp hd, khoadaotaokythuat kh where kh.makhoahoc = hd.makhoahoc and hd.mahocvien = 7`;
        let allCourse = await oracledb.getCheckData(query);

        if (allCourse.length > 0) {
            setup.convertDate(allCourse);
        }

        res.render('personal-technical', { typeLink, getIDCourse, allCourse });
    } catch (error) {

    }
}).post('/personal/technical', async function (req, res, next) {
    let getItem = req.body;
    let checkBox = getItem['checkBox'];

    res.redirect(`/personal/technical/${checkBox}/register`);
});

router.get('/personal/technical/:idcourse/register', async function (req, res, next) {
    let typeLink = 1; // register
    let getIDCourse = req.params.idcourse;
    try {
        let query = `select ctkt.machitietkhoakythuat, kdt.tenkhoahoc, nhp.tennhomhocphan, kdt.ngaybatdau from chitietkhoakythuat ctkt, khoadaotaokythuat kdt, nhomhpkythuat nhp
                        where kdt.makhoahoc = ctkt.makhoahoc and to_char(kdt.ngaybatdau, 'mm') = 4
                        and to_char(kdt.ngaybatdau, 'yyyy') = 2020
                        and nhp.manhomhocphan = ctkt.manhomhocphan ORDER by 1`;
        let groups = await oracledb.getCheckData(query);

        if (groups.length > 0) {
            setup.convertDate(groups);
        }

        let arr = [];

        for (let i = 0; i < groups.length; i++) {
            query = `select hpkt.mahpkythuat, mh.mamonhoc, mh.tenmonhoc, hpkt.namhoc, hpkt.hocky, hpkt.lichhoc, hpkt.phong from hocphankythuat hpkt, chitietkhoakythuat ctk, monhoc mh
                    where hpkt.machitietkhoakythuat = ctk.machitietkhoakythuat
                    and mh.mamonhoc = hpkt.mamonhoc and hpkt.mahpkythuat = '${groups[i]['MACHITIETKHOAKYTHUAT']}'`;
            let item = await oracledb.getCheckData(query);
            if (item.length > 0) {
                arr.push(item);
            }
            else {
                arr.push([]);
            }
        }

        console.log(arr);

        res.render('personal-technical', { typeLink, getIDCourse, groups, arr });

    } catch (error) {

    }

});

router.post('/personal/technical/:idcourse/register/group', async function (req, res, next) {
    let typeLink = 1; // register
    let getIDCourse = req.params.idcourse;
    try {

        let hint = '';
        let search = req.body.query.toLowerCase();
        if (search.length > 0) {
            let query = `select hpkt.mahpkythuat, mh.mamonhoc, mh.tenmonhoc, hpkt.namhoc, hpkt.hocky, hpkt.lichhoc, hpkt.phong from hocphankythuat hpkt, chitietkhoakythuat ctk, monhoc mh
                            where hpkt.machitietkhoakythuat = ctk.machitietkhoakythuat
                            and mh.mamonhoc = hpkt.mamonhoc and hpkt.mahpkythuat = '${search}'`;

            let groups = await oracledb.getCheckData(query);

            if (groups.length > 0) {
                for (let i = 0; i < groups.length; i++) {
                    hint += `<tr>
                        <th>
                            <label for="checkBox_1_1"></label>
                            <input type="checkbox" class="outcheckBoxIn" id="checkBox_1_1" name="checkBox_1_1" value="${groups[i]['MAMONHOC']}">
                        </th>
                        <th><p>${groups[i]['MAHPKYTHUAT']}</p></th>
                        <th><p>${groups[i]['MAMONHOC']}</p></th>
                        <th><p>${groups[i]['TENMONHOC']}</p></th>
                        <th><p>${groups[i]['HOCKY']} - ${groups[i]['NAMHOC']}</p></th>
                        <th><p>${groups[i]['LICHHOC']} - ${groups[i]['PHONG']}</p></th>
                    </tr>`
                }
                res.send(hint);
            }
        }


    } catch (error) {

    }

});

router.get('/personal/technical/:idcourse/history', async function (req, res, next) {
    let typeLink = 2; // history
    let getIDCourse = req.params.idcourse;

    res.render('personal-technical', { typeLink, getIDCourse });
});

module.exports = router;
