const express = require("express");
const router = express.Router();
const vlController = require('../Controllers/vlController')
const userController = require('../Controllers/userController')
const Authmiddleware = require('../routers/Authmiddleware')


router.post('/',userController.postUser)
router.get('/token',Authmiddleware.protect,vlController.refreshToken)
module.exports = router;

