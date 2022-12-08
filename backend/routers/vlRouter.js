const express = require("express");
const router = express.Router();
const userController = require('../Controllers/vlController')
const person = require('../../backend/Models/person')

async function validate (req, res, next) {
    let per;
  
    try {
      per = await person.findOne({"email":req.body.email})
      if (per == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }
      if(per.pass != req.body.pass){
        return res.status(404).json({ message: 'Password not match' })
      }
    } 
    catch (err) {
      return res.status(500).json({ message: err.message })
    }
    next()
  }
  
router.post('/', validate,userController.postvl)

module.exports = router;


