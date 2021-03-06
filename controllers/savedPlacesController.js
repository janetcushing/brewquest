const db = require("../models");

// Defining methods for the savedPlacesController
module.exports = {
  findAll: function(req, res) {
    console.log(`im in savedPlacesController.findAll - here is req`)
    console.log(req);
    db.Breweries
    .find({sub: req.params.sub})
      // .find()
      .sort({ brewery_name: -1 })
      .then(dbModel => {res.json(dbModel)})
      .catch(err => {
        console.log(`savedPlacesController.findAll has an error:`);
        console.log(err);
        res.status(422).json(err)
      });
  },
  findById: function(req, res) {
    db.Breweries
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Breweries
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Breweries
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Breweries
      .findById(req.params.id).remove()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByBreweryId: function(req, res) {
    db.Breweries
      .find({sub: req.params.sub ,brewery_id: req.params.breweryId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByBreweryId: function(req, res) {
    db.Breweries
      .findOneAndUpdate({sub: req.params.sub ,brewery_id: req.params.breweryId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeByBreweryId: function(req, res) {
    db.Breweries
      .find({sub: req.params.sub ,brewery_id: req.params.breweryId}).remove()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};