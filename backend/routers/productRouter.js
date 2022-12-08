const express = require("express");
const multer = require("multer");
const router = express.Router();
const productController = require('../Controllers/productController')


const storage = multer.diskStorage({
    destination: 'productdata/',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
  })
const productdata = multer({ storage: storage })
router.post('/',productdata.single('fileinput'),productController.postUser)
router.get('/',productController.getProducts)
router.get('/:id',productController.getProductById)

module.exports = router;
