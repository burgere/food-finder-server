"use strict";

const express = require("express");
const axios = require("axios");
const config = require("../config/config.js");
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let latitude = req.query.latitude,
    longitude = req.query.longitude;

  let baseUrl =
    config.YELP_BASE_URL +
    config.YELP_API_VERSION +
    "/businesses/search?latitude=" +
    latitude +
    "&longitude=" +
    longitude;

  axios
    .get(baseUrl, {
      headers: {
        Authorization: "Bearer " + config.YELP_API_KEY
      }
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      throw Error(error);
    });
});

module.exports = router;
