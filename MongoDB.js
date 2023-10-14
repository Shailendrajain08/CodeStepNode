const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://shailendrajain0894:0000@cluster0.dtmkl8p.mongodb.net/';
const dataBase = 'e-comm'
const client = new MongoClient(url);

async function dbConnect() {

    let result = await client.connect()
    let db = result.db(dataBase)
    return db.collection('products')

}

module.exports = dbConnect;
