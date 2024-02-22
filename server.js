const express = require('express');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Note = require('./models/note')

const connectToMongo = require("./db/db");
connectToMongo();

app.listen(5000, ()=> {
    console.log('node API is running on port 5000');
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('planner api wala server chal raha hai jinda YAYYYY!!!')
})

app.post('/taskcreate', async(req, res)=> {
    try{
        console.log(req.body);
        const note = await Note.create(req.body);
        res.status(200).json(note);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.get('/task', async(req, res)=>{
    const note = await Note.find({});
    res.status(200).json(note);
})

