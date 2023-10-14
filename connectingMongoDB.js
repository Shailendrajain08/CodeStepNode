const { MongoClient } = require('mongodb');
// Second Type 
// const MongoClient = require('mongodb').MongoClient

// Local database link===============================
// const url = 'mongodb://localhost:27017/'
// global database link===================================
const url = 'mongodb+srv://shailendrajain0894:0000@cluster0.dtmkl8p.mongodb.net/';
const client = new MongoClient(url);
const dataBase = 'e-comm'

async function main() {

    let result = await client.connect()
    let db = result.db(dataBase)
    collection = db.collection('products')
    // for full collection======================
    let response = await collection.find({}).toArray()

    // for single data ------------------
    // let response = await collection.find({name:'iPhone'}).toArray()
    console.log(response)
}

main()