const router = require("express").Router();
const savedPlacesController = require("../../controllers/savedPlacesController");

// Matches with "/api/savedplaces"
router.route("/")
  .get(savedPlacesController.findAll)
  .post(savedPlacesController.create);

// Matches with "/api/savedplaces/:id"
router
  .route("/:id")
  .get(savedPlacesController.findById)
  .put(savedPlacesController.update)
  .delete(savedPlacesController.remove);



module.exports = router;