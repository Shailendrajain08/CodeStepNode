const dbConnect = require('./MongoDB');

const updateDb = async ()  => {
    let data = await dbConnect();
    // data1 = await data.find().toArray();
    let result = await data.updateOne(
        {name: 'OnePlus 12 plus' },{
            $set: { name: 'OnePlus 12 pro +'}
    }
    );
    console.log(result)    
}

updateDb();