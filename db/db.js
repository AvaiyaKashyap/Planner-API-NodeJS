const mongoose = require('mongoose')
const express = require('express');
const app = express();

const connectToMongo = () =>{
    mongoose.set("strictQuery", false)
    mongoose.connect('mongodb+srv://versevista-api:2BTYN48J7eiiA1t6@cluster0.dkewqlp.mongodb.net/Planner-APP?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected To MongoDB')
    }).catch((error) => {
        console.log(error)
    });
}

module.exports = connectToMongo;