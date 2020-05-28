
// import express
const express = require("express");

//get express router
const router = express.Router();

// import home_controller
const homeController = require("../controllers/home_controller");

// handles route for root/home page
router.get('/',homeController.home);

// handles route for creating task
router.post('/create',homeController.create);

//handles rote for selecting task
router.get('/select',homeController.select);

//handles route for deleting task

router.get('/remove',homeController.remove);

//include user routes
router.use('/user',require("./users"));




console.log("router loaded");

// exporting router
module.exports = router;
