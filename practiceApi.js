const express = require('express');
const dbConnect = require('./MongoDB');

//Using this to objetify _id 
const mongodb = require('mongodb')
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

//delete api method using express
app.delete("/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result)
});

app.listen(3000)