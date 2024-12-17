var express = require('express');
const requireAuth = require('../middleware/requireAuth');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.render('dashboard/index');
});

module.exports = router;
