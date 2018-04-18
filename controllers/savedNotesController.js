const db = require("../models");

// Defining methods for the savedNotesController
module.exports = {
    findAllbyBrewery: function (req, res) {
        db.Notes
            .find({
                brewery_id: req.query.id,
                aud: req.query.aud
            })
            .sort({
                date: -1
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Notes
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Notes
            .findById(req.query.id).remove()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};