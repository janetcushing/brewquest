const router = require("express").Router();
const savedPlacesController = require("../../controllers/savedPlacesController");

  // Matches with "/api/savedplaces2/:sub"
router
.route("/:sub")
.get(savedPlacesController.findAll);
 


module.exports = router;