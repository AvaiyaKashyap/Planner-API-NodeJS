const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'secretkey');
        
        // Find user by ID from decoded token
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error('User not found');
        }

        // Attach token and user to request object
        req.token = token;
        req.user = user;

        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: 'Please authenticate' });
    }
};
