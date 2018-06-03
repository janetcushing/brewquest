//=================================================
// dependencies
//=================================================
const Express = require("express");
const request = require("request");
const rp = require("request-promise");
const router = Express.Router();
const path = require("path");
// const NodeGeocoder = require('node-geocoder');
const db = require("../models");
const mongojs = require("mongojs");
const Breweries = require("../models/breweries.js");
const mergeByKey = require("array-merge-by-key");

//=================================================
// global variables
//=================================================
const BASEURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const DETAILURL = "https://maps.googleapis.com/maps/api/place/details/json?";
const APIKEY = "key=AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ";
const RANKBY = "&rankby=distance"
const KEYWORD = "&keyword=brewery"
const FORMAT = "&format=json";
const LOCATION = "&location="
// const OPTIONS = {
// provider: 'google',
// httpAdapter: 'https',
// apiKey: 'AIzaSyCBumUHvERt5G6PSGrvs9MQHRbbHdS7BlQ',
// formatter: null
// };
// const GEOCODER = NodeGeocoder(OPTIONS);
var holdplacesBody = [];
var holdDetailBody = [];
var holdDbBody = [];

module.exports = {

    //----------------------------------------------------------
    // get brewery info from google places api.  This function
    // kicks off 6 steps.  step 1, translate the search location
    // into latitude and longitude.  step2, call the google places
    // api.  step 3, call the google places detail api. step4, 
    // call the database to see if the place has previously been
    // saved.  step5, prepare the data to send to the client. step6,
    // send the data to the client
    //----------------------------------------------------------
    getApiData: (req, res) => {
      //second step, call the google places api, which in turn calls the google
      //places detail api (step3) and the database(step4) 
      holdplacesBody.length = 0;
      holdDetailBody.length = 0;
      holdDbBody.length = 0;
      getPlacesHeaderData(req, res)
        .then(function (result) {
          //step 5 and 6, prepare the data and send it to the client
          prepareForClient(result)
            .then(function (placeDetails) {
              res.send({
                placeDetails
              });
            }).catch(function (err) {
              console.log("an error occured when returning prepareForClient promise");
              console.log(err);
              res.status(500).send("A Server Error Occurred");
            });
        }).catch(function (err) {
          console.log("an error occured when returning headerPromise");
          console.log(err);
          res.status(500).send("A Server Error Occurred");
        });
    }

  } 




    //---------------------------------------------------------- 
    // call the google places api and then kick off the call to the 
    // google places detail api and then kick off the call to
    // the database to get the saved boolean which tells if the
    // place has previously been saved
    //----------------------------------------------------------
    const getPlacesHeaderData = (req, res) => {
      var headerPromise = new Promise(function (resolve, reject) {
        const locn = `${req.query.lat},${req.query.lng}`;
        console.log(`locn`);
        console.log(locn);
        const sub = req.query.sub;
        console.log(BASEURL + APIKEY + LOCATION + locn + RANKBY + KEYWORD);
        rp(BASEURL + APIKEY + LOCATION + locn + RANKBY + KEYWORD)
          .then(response => JSON.parse(response))
          .then(body => {
            if (body.status != "OK") {
              console.log(`*********************************`);
              console.log(`Header query status ${body.status}`);
              console.log(`*********************************`);
            }
            holdplacesBody = body.results;
            // call the details api and make a call to the database to get more data
            getPlacesDetailData(body, sub)
              .then(detailBody => {
                getPlacesfromDatabase(detailBody, sub)
                  .then(dbBody => {
                    let result = mergeByKey("place_id", holdplacesBody, holdDetailBody, holdDbBody);
                    console.log(`result[0].sub about to resolve`)
                    console.log(result[0].sub);
                    resolve(result); 
                  }).catch(error => {
                    console.log("Error returned from dbPromise");
                    console.log(error);
                    res.status(500).send("A Server Error Occurred");
                  });
              }).catch(error => {
                console.log("Error returned from getPlacesDetailData promise");
                console.log(error);
                res.status(500).send("A Server Error Occurred");
              });
          })
          .catch(error => {
            console.log("Error returned from getPlacesHeaderData");
            console.log(error);
            res.status(500).send("A Server Error Occurred");
          });
        setTimeout(function () {
          resolve(holdplacesBody);
        }, 5000);
      });
      return headerPromise;

    }

    //---------------------------------------------------------- 
    // call the google places detail api.  You have to call the 
    // detail api once for each of the places returned by the header call
    //----------------------------------------------------------
    const getPlacesDetailData = (body, res) => {
      var detailPromise = new Promise(function (resolve, reject) {
        for (let ii = 0; ii < body.results.length; ii++) {
          let place = "&place_id=" + body.results[ii].place_id;
          rp(DETAILURL + APIKEY + place)
            .then(detailResponse => JSON.parse(detailResponse))
            .then(detailBody => {
              if (detailBody.status != "OK") {
                console.log(`*********************************`);
                console.log(`Detail query status ${detailBody.status}`);
                console.log(`*********************************`);
              }
              holdDetailBody.push(detailBody.result);
              if (holdDetailBody.length === (body.results.length)) {
                resolve(holdDetailBody);
              }
            }).catch(error => {
              console.log("Error returned from getPlacesDetailData");
              console.log(error);
              res.status(500).send("A Server Error Occurred");
            });
        }
      }); //end of detailPromise
      return detailPromise;
    }

    //---------------------------------------------------------- 
    // call the database to check if the place has been  
    // previously saved
    //----------------------------------------------------------
    const getPlacesfromDatabase = (detailBody, sub) => {
      var dbPromise = new Promise(function (resolve, reject) {
        console.log(`in getPlacesfromDatabase`);
        console.log(`sub11: ${sub}`);
        for (let iii = 0; iii < detailBody.length; iii++) {
          db.Breweries
          .find( { $and: [ { place_id: { $eq: detailBody[iii].place_id } }, 
            { sub: { $eq: sub } } ] } )
            .then(dbModel => {
              console.log(`aboutt o dump dbModel`);
              console.log(dbModel);
              if (dbModel[0]) {   
                holdDbBody.push({
                  "place_id": detailBody[iii].place_id,
                  "saved": true,
                  "sub": sub 
                });
                console.log(`sub1: ${holdDbBody.sub}`);
              } else {
                holdDbBody.push({
                  "place_id": detailBody[iii].place_id,
                  "saved": false,
                  "sub": sub 
                });
                console.log(`sub2: ${holdDbBody.sub}`);
              }
              if (holdDbBody.length === (detailBody.length)) {
                resolve(holdDbBody);
              }
            }).catch(error => {
              console.log("Error returned from getPlacesfromDatabase");
              console.log(error);
              res.status(500).send("A Server Error Occurred");
            });
        }
      });
      return dbPromise;
    }




    //---------------------------------------------------------- 
    // reduce the data to only the fields we are using in the client  
    //----------------------------------------------------------
    const prepareForClient = (result) => {
      console.log(`in prepareForClient :`)
      console.log(result[0].sub);
      var preparePromise = new Promise(function (resolve, reject) {
        let placeDetails = result.map((element, i) => {
          let open_now = false;
          let weekday_text = [];
          let num_reviews = 0;
          let reviews = [];
          if (element.opening_hours) {
            open_now = element.opening_hours.open_now;
            weekday_text = element.opening_hours.weekday_text;
          }
          if (element.reviews) {
            reviews = element.reviews;
            num_reviews = element.reviews.length;
          }
          let details = {
            "details_key": i,
            "brewery_id": element.id,
            "brewery_name": element.name,
            "icon": element.icon,
            "latitude": element.geometry.location.lat,
            "longitude": element.geometry.location.lng,
            "place_id": element.place_id,
            "rating": element.rating,
            "vicinity": element.vicinity,
            "saved": element.saved,
            "full_address": element.formatted_address,
            "phone": element.formatted_phone_number,
            "price_level": element.price_level,
            "num_reviews": num_reviews,
            "website": element.website,
            "open_now": open_now,
            "photos": element.photos,
            "reviews": reviews,
            "sub": element.sub, 
            "url": element.url,
            "weekday_text": weekday_text
          }
          return details;
        })
        resolve(placeDetails);
      })
      return preparePromise;

    }