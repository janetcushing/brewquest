const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    db.UserStores
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserStores
      .findOneAndUpdate({ sub: req.params.sub }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySub: function (req, res) {
    console.log(`req `);
    console.log(req);
    db.UserStores
      // .find({ "sub": req.params.sub })
      .find().where('sub').equals(req.params.sub)
      .then(dbModel => {
        console.log("dbModel:");
        console.log(JSON.stringify(dbModel));
        if (dbModel[0]) {
          console.log("document was found");
        res.json(dbModel[0]);
        } else {
          res.json({'message': 'document not found}'});
        }  
      })
      .catch(err => {
        console.log("error returned from findBySub");
        console.log(err);
        res.status(422).json(err)
      });
  }
};
