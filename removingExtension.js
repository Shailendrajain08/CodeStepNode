const express = require('express');
const path = require('path')
const app = express();

const htmlPath = path.join(__dirname, 'htmlPages');

// If you give name of the html file as Index.html then it will be your root file other wise you have to call everyhtml page one by one 

// app.use(express.static(htmlPath))

app.get('', (req, res) => {
    res.sendFile(`${htmlPath}/index.html`)
})

app.get('/home', (req, res) => {
    res.sendFile(`${htmlPath}/home.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${htmlPath}/about.html`)
})

app.get('*', (req, res) => {
    res.sendFile(`${htmlPath}/pagenotFound.html`)
})

app.listen(3000)