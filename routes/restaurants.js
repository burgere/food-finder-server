var express = require('express');
var axios = require('axios');
var config = require('../config/config.js');
var router = express.Router();

/* GET users listing. */
const baseUrl = config.YELP_BASE_URL + config.YELP_API_VERSION + "/businesses/search"
router.get('/', function(req, res, next) {
  console.log(baseUrl);
  
  axios.get(baseUrl, {
    params: {
      latitude: req.query.latitude,
      longitude: req.query.longitude
    },
    headers: {
      'Authorization': 'Bearer ' + config.YELP_API_KEY
    }
  })
  .then((response) => {
    res.json(response);
  })
  .catch((error) => {
    console.log(error);
    
    throw Error();
  })  
});

module.exports = router;
