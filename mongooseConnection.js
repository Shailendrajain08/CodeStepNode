const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://shailendrajain0894:0000@cluster0.dtmkl8p.mongodb.net/e-comm"
);

const ProductsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDb = async () => {
  const ProductsModel = mongoose.model("products", ProductsSchema);

  let data = new ProductsModel({
    name: "A9",
    brand: "Karbonn",
    price: 9500,
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
    const ProductsModel = mongoose.model("products", ProductsSchema);

    let data = await ProductsModel.updateOne(
        {name : "A9"},
        {
            $set: { price: 9000}
        }
    )
    console.log(data)
}

const deleteInDb = async () => {
    const ProductsModel = mongoose.model("products", ProductsSchema);

    let data = await ProductsModel.deleteOne(
        {name : "A9"}
    )
    console.log(data)
}

const findInDb = async () => {
    const ProductsModel = mongoose.model("products", ProductsSchema);

    let data = await ProductsModel.find()
    console.log(data)
}

// For saving data in db 
// saveInDb()

// for updating one data
// updateInDb()

// for deleting one data 
// deleteInDb()

// for finding all data 
findInDb();


