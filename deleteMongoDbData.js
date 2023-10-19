const mongodb = require('./MongoDB');

const deleteDb = async () => {
    let data = await mongodb();

    // --------- For deletion of one data 
    // let result = await data.deleteOne({
    //     name : 'Oppo Reno 7'
    // })
    // console.log(result)

    // --------- For deletion of many data 
    let result = await data.deleteMany({
        name : 'Oppo Reno 7'
    })
    if(result.acknowledged){
        console.log("data deleted")
        console.log(result)
    }
    else{
        console.log('Some error')
    }

}

deleteDb();