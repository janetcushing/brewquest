// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object

const UserStoreSchema = new Schema({
  insertDate: {
    type: Date,
    default: Date.now
  }, 
  given_name: {
    type: String
  },
  family_name: {
    type: String
  },
  middle_name: {
    type: String
  },
  nickname: {
    type: String
  },
  name: {
    type: String
  },
  picture: {
    type: String
  },
  gender: {
    type: String
  },
  locale: {
    type: String
  },
  updated_at: {
    type: String
  },
  iss: {
    type: String
  },
  sub: {
    type: String
  },
  aud: {
    type: String
  },
  iat: {
    type: String
  },
  exp: {
    type: String
  },
  at_hash: {
    type: String
  },
  nonce: {
    type: String
  }
});

const UserStore = mongoose.model("UserStore", UserStoreSchema);

module.exports = UserStore;

