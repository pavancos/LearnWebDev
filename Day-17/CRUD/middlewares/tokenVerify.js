const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(bearerToken===undefined){
        res.send({message:'Unauthorized access'});
    }
    let token=bearerToken.split(" ")[1];
    //verifies token
    try{
        let decode=jwt.verify(token,'abcdef');
        console.log(decode);
        next();

    }catch(err){
        res.send({message:'Token Expired, Login Again'});
    }
}

module.exports = tokenVerify;