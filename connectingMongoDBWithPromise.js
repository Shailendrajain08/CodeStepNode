const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://shailendrajain0894:0000@cluster0.dtmkl8p.mongodb.net/';
const client = new MongoClient(url);
const dataBase = 'e-comm'

async function dbConnect() {

    let result = await client.connect()
    let db = result.db(dataBase)
    return db.collection('products')

    // for full collection======================
    // let response = await collection.find({}).toArray()
    // console.log(response)
}

// ++++++++++++++++++++ First way to handle Promise +++++++++++++++++++++
// We are getting promise {<pending>} , for handling we have to use then to handle promise 

dbConnect().then((res) => {
    // for full collection data ======================
    console.log(res.find({}).toArray().then((data) => {
        console.log(data);
    }));

    //for single data ======================
    // console.log(res.find({name:"S23 ultra"}).toArray().then((data)=>{
    //     console.log(data);
    // }));
})
// ++++++++++++++++++++++++++++ End ++++++++++++++++++++++++++++++++


// ++++++++++++++++++++ Second way to handle Promise +++++++++++++++++++++

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
}

main()


// ++++++++++++++++++++++++++++ End ++++++++++++++++++++++++++++++++