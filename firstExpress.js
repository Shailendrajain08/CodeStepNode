const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log("data sent by browser =>>>>", req.query.name)
    res.send('Hello, '+ req.query.name)
})

app.get('/about', (req, res) => {
    res.send('Hello, This is about page')
})

app.get('/contactus', (req, res) => {
    res.send('Hello, This is contactus page')
})

app.listen(3000);