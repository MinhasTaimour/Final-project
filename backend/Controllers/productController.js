const product = require('../Models/product')
console.log('1234')
const cloudinary = require('cloudinary')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const asyncHandler = require ('express-async-handler');

cloudinary.config({ 
    cloud_name: 'dzpstkulz', 
    api_key: '839374168333595', 
    api_secret: 'Jly4Ap1IJo8kzo26OlI_IMTh-5E' 
  });


exports.getProducts = asyncHandler(async (req, res) => {
	const pageSize = 4;
	const page = Number(req.query.pageNumber) || 1;

    console.log(req.query.keyword)
	const count = await product.countDocuments();
	const products = await product.find()
		.limit(pageSize)
		.skip(pageSize * (page - 1));
    console.log(products,count)
	res.json({
		products,
		page,
		pages: Math.ceil(count / pageSize),
	});
});
exports.getProductById = asyncHandler(async (req, res) => {
	const products = await product.findById(req.params.id);
    console.log(products)
	if (products) {
		res.json(products);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

exports.postUser = async (req, res) => {
    const T = req.headers.authorization.split(' ')[1];
    const decode =jwt.verify(T,process.env.TOKEN_SECRET);
    const object = JSON.parse(req.body.fileinput);
    let pic = "";
    if (req.file)
        pic =await cloudinary.uploader.upload(req.file.path);

    const products = new product({
        name: object.name,
        Yoe: object.YOE,
        user:decode.id,
        image: pic.url,
        Averagetime: object.Averagetime,
        email: object.email
    })
    try {
        const newProduct = await products.save()
        res.status(201).json(newProduct)
        console.log('Submitted');
    }
    catch (err) {
        res.status(400).json({ message: err.message })
        console.log('not Submitted', err);
    }
}