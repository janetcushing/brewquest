//=================================================
// dependencies
//=================================================
const router = require("express").Router();
const apiLocationController = require("../../controllers/apiLocationController.js");

//-----------------------------------------------------------------------------
// get search location latitude and longitude based on zip code or city - state
// or get ip code and city - state based on latitude and longitude
//-----------------------------------------------------------------------------
router.route("/:location")
.get(apiLocationController.getLocation);

//--------------------------------------
// Export routes for server.js to use.
//--------------------------------------
module.exports = router;