const router = require("express").Router();
const savedPlacesController = require("../../controllers/savedPlacesController");


 // Matches with "/api/savedplace/:brewery_id"     
 router
 .route("/:breweryId")
 .get(savedPlacesController.findByBreweryId)
 .post(savedPlacesController.create)
 .put(savedPlacesController.updateByBreweryId)
 .delete(savedPlacesController.removeByBreweryId);


module.exports = router;