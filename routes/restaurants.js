'use strict';

var express = require("express");
var axios = require("axios");
var config = require("../config/config.js");
var util = require("util");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let latitude = req.query.latitude, longitude = req.query.longitude;

  let baseUrl =
    config.YELP_BASE_URL + config.YELP_API_VERSION + "/businesses/search?latitude=" + latitude + "&longitude=" + longitude;

  axios
    .get(baseUrl, {
      headers: {
        Authorization: "Bearer " + config.YELP_API_KEY
      }
    })
    .then(response => {
      res.json(util.inspect(response.data));
    })
    .catch(error => {
      // console.log(error);

      throw Error(error);
    });
});

module.exports = router;
