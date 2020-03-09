const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        let decoded = jwt.verify(token, process.env.JWT_KEY_ADMIN);
        req.userData = decoded;
        console.log("Administrator Authenticated")
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Authentication Failed'
        })
    }

};