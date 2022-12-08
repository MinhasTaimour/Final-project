
const express = require("express");
const router = express.Router();
const userController = require('../Controllers/userController')

const userMiddleWare = (req,res,next) =>{
    if (req.headers.role === "user"){
        console.log('Ok ki report');
        return next();

    }
    res.status(403).send({status:403,message:"Bad Request"})
}
router.get('/',userMiddleWare,userController.getUser)
router.post('/',userController.postUser)

module.exports = router;









