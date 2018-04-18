var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
const baseUrl = config.YELP_BASE_URL + config.YELP_API_VERSION + "/businesses/search"

router.get('/', function(req, res, next) {
  axios.get(baseUrl, {
    params: {
      latitude: req.query.latitude,
      longitude: req.query.longitude
    }
  })
  .then((response) => {
    res.json(response);
  })
  .catch((error) => {
    
  })  
});

module.exports = router;
