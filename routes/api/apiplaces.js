//=================================================
// dependencies
//=================================================
const router = require("express").Router();
const apiController = require("../../controllers/apiController.js");

//-----------------------------------------------------------------------------
// get brewery info from google places api based on zip code or city - state
//-----------------------------------------------------------------------------
router.route("/:location")
.get(apiController.getApiData);

//--------------------------------------
// Export routes for server.js to use.
//--------------------------------------
module.exports = router;