const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
        
    },
  
    role:{
        type: String,
        required: true
    },
    // confirmPassword:{
    //     type: String,
    //     required: true
    // },

  
    token:{
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Logins',personSchema)
