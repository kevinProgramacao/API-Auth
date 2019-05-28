const jwt   = require('jsonwebtoken');
const { promisify } = require('util');
const config        = require('../config/default.json');

module.exports = async (req, res , next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ mensagem: 'Token not provide'})
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, config.jwtSecret);

        req.userId = decoded.id

        return next();
    } catch(err) {
        return res.status(401).json({ mensagem: 'Token invalid'})
    }
};