const router = require("express").Router();
const savedPlacesRoutes = require("./savedplaces");
const savedPlaceRoutes = require("./savedplace");
const savedNotesRoutes = require("./savednotes");
const savedReviewsRoutes = require("./savedreviews");
const apiPlacesRoute = require("./apiplaces");
const userRoute = require("./user");


// Database routes - Places/Breweries table     //
router.use("/savedplaces", savedPlacesRoutes);
router.use("/savedplace", savedPlaceRoutes);

// Database routes - Notes table     //
router.use("/savednotes", savedNotesRoutes);

// Database routes - Reviews table     //
router.use("/savedreviews", savedReviewsRoutes);

// Database Routes - User table
router.use("/user", userRoute);

// API route - to get Google api places data
router.use("/apiplaces", apiPlacesRoute);

module.exports = router;
