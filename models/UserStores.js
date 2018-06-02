
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserStoreSchema = new Schema({ 
  given_name: {
    type: String
  },
  family_name: {
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
  },
  insertDate: {
    type: Date,
    default: Date.now
  } 
});

const UserStores = mongoose.model("UserStores", UserStoreSchema);

module.exports = UserStores;