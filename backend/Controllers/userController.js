const person = require('../Models/person')
const bcrypt = require("bcrypt")

exports.postUser =  async (req,res) =>{
    const salt = await bcrypt.genSalt(10);
      const ps =  await bcrypt.hash(req.body.password,salt)
    console.log("perss")
    const persons = new person({
        name:req.body.name,
        email: req.body.email,
        password: ps,
        role:req.body.role,
    })
 
    console.log(persons)

    try {
        const newPerson = await persons.save()
        res.status(201).json(newPerson)
        console.log('Submitted');
    } 
    catch (err) {
        res.status(400).json({ message: err.message })
        console.log('not Submitted',err);
}}

