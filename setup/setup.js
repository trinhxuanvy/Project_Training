module.exports = {
    
    convertDate: function (obj) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i]['NGAYBATDAU'] != null) {
                let date = new Date(obj[i]['NGAYBATDAU']);
                obj[i]['NGAYBATDAU'] = date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString();
            }
        }
    },
}