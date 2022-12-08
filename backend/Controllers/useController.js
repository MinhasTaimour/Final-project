exports.getUser =  (req,res) =>{
    console.log('Router Working');
    res.send({ status: 200, message:"Response from User Res"})
}

exports.postUser =  (req,res) =>{
    console.log(req.body);
    res.send({ status: 200, message:"Response from User Res"})
}


