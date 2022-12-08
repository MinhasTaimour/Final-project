const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Yoe:{
        type: Number,
        required: true     
    },
    Averagetime:{
        type: String,
        required: true     
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    
    email:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },

})
module.exports = mongoose.model('products',productSchema)