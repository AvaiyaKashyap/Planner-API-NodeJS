const express = require('express');
const mongoose =  require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.send('planner api wala server chal raha hai jinda YAYYYY!!!')
})

app.listen(5000, ()=> {
    console.log('Server Hosted on port 5000')
})