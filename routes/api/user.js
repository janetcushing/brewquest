const router = require("express").Router();
const userController = require("../../controllers/userController");


 // Matches with "/api/user/     
 router
 .route("/")
 .post(userController.create);


// Matches with "/api/user/:aud"
router
  .route("/:aud")
  .get(userController.findByAud)
  .put(userController.update);

module.exports = router;