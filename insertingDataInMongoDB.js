const dbConnect = require("./MongoDB");

const insert = async () => {
    const db = await dbConnect();

    // For Inserting single data================

    const result = await db.insertOne(
        {
                    name : 'Oppo Reno 7',
                    brand : 'Oppo',
                    price : 80000,
                    category : 'mobile'
                }
    );
    
    // For Inserting multiple data in one go ================
    // const result = await db.insertMany(
    //     [
    //     {
    //         name : 'Google Pixel 8',
    //         brand : 'Google',
    //         price : 80000,
    //         category : 'mobile'
    //     },
    //     {
    //         name : 'Google Pixel 8 Pro',
    //         brand : 'Google',
    //         price : 110000,
    //         category : 'mobile'
    //     },
    //     {
    //         name : 'OnePlus 12',
    //         brand : 'One Plus',
    //         price : 80000,
    //         category : 'mobile'
    //     }
    // ]
    // );


    if(result.acknowledged){
        console.log("data inserted");
    }
}
insert();