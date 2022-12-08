const person = require('../Models/person')
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const generateAccessToken = (id, t=3600) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: t });
};

exports.refreshToken =  async (req,res) =>{
    let token;
    try {  
            token = req.headers.authorization.split(' ')[1];  
			const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            const remainedtime =decoded.exp-(Date.now()/1000);
            per= await person.findOne({"_id":decoded.id})
            if(remainedtime<=300){
                const tk = generateAccessToken(decoded.id );
                per.update({token:tk}).exec()
                res.status(201).json({name: req.headers.name, role : req.headers.role, token:tk})
            }
    } 
    catch (err) {
        res.status(400).json({ message: err.message })
        console.log('not Submitted',err);
    }
}
exports.postvl =  async (req,res) =>{
    try {  
     per= await person.findOne({"email":req.body.email})
     const token = generateAccessToken( per._id );
     per.update({token:token}).exec()
     res.status(201).json({name: per.name, role: per.role, token:token})
    } 
    catch (err) {
        res.status(400).json({ message: err.message })
        console.log('not Submitted',err);
    }
}



