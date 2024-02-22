const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.auth = async (req, res, next) => {
    try{

        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secretkey')
        let user;
        user = await User.findOne({_id:decoded._id, 'tokens.token': token})

        if(!user){
            throw new Error()
        }

        req.token = token
        req.user = user

        next()

    } catch(e){
        console.log("...",e.message)
        res.status(401).send({error: "કૃપા કરીને authenticate કરો..."})
    }
}