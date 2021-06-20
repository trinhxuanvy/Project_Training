var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
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

module.exports = router;
