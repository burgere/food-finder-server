var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.type('application/json')
  res.json({
      'test': 'test'
  })
});

module.exports = router;
