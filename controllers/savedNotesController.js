const db = require("../models");

// Defining methods for the savedNotesController
module.exports = {
    findAllbyBrewery: function (req, res) {
        console.log(`in findAllbyBrewery`);
        console.log(req.query);
        db.Notes
            .find({
                brewery_id: req.query.id,
                sub: req.query.sub
            })
            .sort({
                date: -1
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(`there is an error from findAllbyBrewery`);
                console.log(err);
                res.status(422).json(err)}
            );
    },
    create: function (req, res) {
        db.Notes
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Notes
            .find({
                brewery_id: req.query.id,
                sub: req.query.sub
            }).remove()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};