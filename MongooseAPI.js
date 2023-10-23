const express = require("express");
require("./mongooseConfig");

const Product = require("./mongooseProduct");
const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send("Done");
});

app.get("/listen", async (req, res) => {
  let data = await Product.find();
  console.log(data);
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });

  res.send(data);
});

//_____________ Search API __________________

app.get("/search/:key", async (req, res) => {
    
    let data = await Product.find({
        "$or" : [
            // You can search for as many fields as you want by putting field names hare 
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}
        ]
    });
    console.log("Searched")
    res.send(data)
})

app.listen(3000);
