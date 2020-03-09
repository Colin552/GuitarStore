const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    let decoded
    try{
        decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log("User Authenticated")
    }catch{
        decoded = jwt.verify(token, process.env.JWT_KEY_ADMIN);
        console.log("Administrator Authenticated")
    }
    
    req.userData = decoded;
    next();
};