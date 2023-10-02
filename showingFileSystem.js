const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'dummyFile');

// this will create 5 files in dummyFile folder
// for(let i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text here ")
// }

// this will show all files from dummyFile folder
fs.readdir(dirPath, (err,files)=>{
    files.forEach((data)=>{
        console.warn(data)

    })
})
