var express = require('express');
var oracledb = require('../backend/database');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let data = await oracledb.getCheckData(`select * from giaovien`);
  let decoded = oracledb.verifyData(data);

  if (decoded != 0) {
    console.log(oracledb.getNumData(decoded['result'], 1, 1));
  }
  res.render('index', { id: 'test' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  res.redirect('/login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/courses/technical/:idcourse', function(req, res, next) {
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

router.get('/personal/technical', function (req, res, next) {
  let typeLink = 0; // choose chematic
  let getIDCourse = -1;
  res.render('personal-technical', { typeLink, getIDCourse });
}).post('/personal/technical', function (req, res, next) {
  let getItem = req.body;
  let checkBox = getItem['checkBox'];
  
  res.redirect(`/personal/technical/${checkBox}/register`);
});

router.get('/personal/technical/:idcourse/register', function (req, res, next) {
  let typeLink = 1; // register
  let getIDCourse = req.params.idcourse;
  
  res.render('personal-technical', { typeLink, getIDCourse });
});

router.get('/personal/technical/:idcourse/history', function (req, res, next) {
  let typeLink = 2; // history
  let getIDCourse = req.params.idcourse;

  res.render('personal-technical', { typeLink, getIDCourse });
});

module.exports = router;
