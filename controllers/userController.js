const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    db.UserStore
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserStore
      .findOneAndUpdate({ aud: req.params.aud }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAud: function (req, res) {
    db.UserStore
      .find({aud: req.params.aud})
      .then(dbModel => {
        if (dbModel.data[0].aud) {
        }
        res.json(dbModel[0])
      })
      .catch(err => res.status(422).json(err));
  }
};