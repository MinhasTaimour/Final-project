const asyncHandler =require( 'express-async-handler');
const person = require('../Models/person')
const jwt = require('jsonwebtoken');

// asyncHandler for handling exceptions and prevent hanging on request!
exports.protect = asyncHandler(async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

			req.user = await person.findById(decoded.id).select('-password');
			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authrozied, token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

// const isAdmin = (req, res, next) => {
// 	if (req.person && req.person.isAdmin) {
// 		next();
// 	} else {
// 		res.status(401);
// 		throw new Error('Not authorized as an admin');
// 	}
// };

