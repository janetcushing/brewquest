//=================================================
// dependencies
//=================================================
const Express = require("express");
const request = require("request");
const rp = require("request-promise");
const router = Express.Router();
const path = require("path");
const NodeGeocoder = require('node-geocoder');
// const db = require("../models");
// const mongojs = require("mongojs");
// const Breweries = require("../models/breweries.js");
// const mergeByKey = require("array-merge-by-key");

//=================================================
// global variables
//=================================================
// const BASEURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
// const DETAILURL = "https://maps.googleapis.com/maps/api/place/details/json?";
const APIKEY = "key=AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ";
// const RANKBY = "&rankby=distance"
// const KEYWORD = "&keyword=brewery"
// const FORMAT = "&format=json";
// const LOCATION = "&location="
const OPTIONS = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: 'AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ',
  formatter: null
};
const GEOCODER = NodeGeocoder(OPTIONS);
// var holdplacesBody = [];
// var holdDetailBody = [];
// var holdDbBody = [];

module.exports = {

  //----------------------------------------------------------
  // get location details
  //----------------------------------------------------------
  getLocation: (req, res) => {
    console.log('in getLocation');
    console.log(`loc: ${req.params.location}`);
    loc = req.params.location;
    //get the geocode details, i.e. lat, long, city, state
    GEOCODER.geocode(loc)
      .then(function (locResponse) {
        let locn = locResponse[0];
        console.log(`locn = ${JSON.stringify(locn)}`)
        if (!locn){
          res.send("location error from geocoder.geocode");
        }else{
        res.send({
          locn
        });
      }
      }).catch(function (err) {
        console.log(err);
        res.send("location error from geocoder.geocode");
      });
  }
}