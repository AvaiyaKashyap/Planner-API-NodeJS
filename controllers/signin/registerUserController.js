const User = require("../../models/user")
const bcrypt = require('bcryptjs')

exports.registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        let user = await User.findOne({email: email,})

        if(user){
            res.status(405).send({message: "user already exists, Please login"})
        }
    } catch(error){

    }
}