//=================================================
// dependencies
//=================================================
const Express = require("express");
const request = require("request");
const mongojs = require("mongojs");
const router = Express.Router();
const path = require("path");

const Breweries = require("../models/breweries.js");

module.exports = {

  createBrewery: (req, res) => {
    let currentBrewery = {
      brewery_id: req.body.brewery_id,
      brewery_name: req.body.brewery_name,
      full_address: req.body.full_address,
      icon: req.body.icon,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      num_reviews: req.body.num_reviews,
      phone: req.body.phone,
      place_id: req.body.place_id,
      price_level: req.body.price_level,
      rating: req.body.rating,
      website: req.body.website
    };
    Breweries.create(currentBrewery, function (err, data) {
      if (err) {
        console.log(`There was a DB error from insertNewBreweryIntoDatabase: ${err} `);
        res.status(500).end();
      } else {
        res.send("success");
      }
    });
  }
}