const router = require("express").Router();
const savedNotesController = require("../../controllers/savedNotesController");

// Matches with "/api/savednotes"
router.route("/")
  .get(savedNotesController.findAllbyBrewery)
  .post(savedNotesController.create)
  .delete(savedNotesController.remove);

module.exports = router;