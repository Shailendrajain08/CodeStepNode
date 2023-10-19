const express = require('express');
const dbConnect = require('./MongoDB');
const app = express();

//For taking data from postman
app.use(express.json());

// get api method using express
app.get('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.find().toArray();
    res.send(result)
})

//post api method using express
app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = data.insertOne(req.body);
    res.send(result)
}) 

//put api method using express
app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name: "Google Pixel 8"}, {$set: req.body}
    );
    res.send("result send")
})

app.listen(3000)