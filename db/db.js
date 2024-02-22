const mongoose = require('mongoose')

const connectToMongo = () =>{
    mongoose.connect('mongodb+srv://versevista-api:2BTYN48J7eiiA1t6@cluster0.dkewqlp.mongodb.net/Planner-App?retryWrites=true&w=majority',()=>{
           console.log("Connected Successfully");
       })
}

module.exports = connectToMongo;