const router = require("express").Router();
const userController = require("../../controllers/userController");


 // Matches with "/api/user/     
 router
 .route("/")
 .post(userController.create);


// Matches with "/api/user/:sub"
router
  .route("/:sub")
  .get(userController.findBySub)
  .put(userController.update);

module.exports = router;