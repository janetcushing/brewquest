const db = require("../models");

// Defining methods for the savedReviewsController
module.exports = {
    findAllbyBrewery: function (req, res) {
        db.Reviews
            .find({
                brewery_id: req.query.id
            })
            .sort({
                date: -1
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Reviews
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};