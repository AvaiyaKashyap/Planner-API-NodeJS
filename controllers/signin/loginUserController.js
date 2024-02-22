const User = require('../../models/user');
const bcrypt = require('bcryptjs')

exports.loginUser = async(req, res) => {
    try{
        const {email, password} = req.body;

        let user = await User.findOne({email})

        if(!user){
            res.status(405).send({message: "User not exists, Please register"})
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword){
            res.status(405).send({message: "Wrong Password"})
        }
        else{
            let token = await user.generateAuthToken()

            res.status(201).send({user: user, token: token})
        }
    } catch(error){
        res.send({error: error.message})
    }
}