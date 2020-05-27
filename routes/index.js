const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
router.get('/',homeController.home);
router.post('/create',homeController.create);
router.get('/select',homeController.select);
router.get('/remove',homeController.remove);




console.log("router loaded");

module.exports = router;
