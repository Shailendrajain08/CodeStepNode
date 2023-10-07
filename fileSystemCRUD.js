const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'firstCrud');
const filePath = `${dirPath}/apple.txt`


// For Creating file ----------------------------
fs.writeFileSync(filePath, 'This is simple text');

// For Reading file ----------------------------
// fs.readFile(filePath,"utf-8",(err,item)=>{
// console.log(item)
// })

// For Updating file ---------------------------- if you run this code again it will append twice
// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated")
// })

// For Updating file name ----------------------------
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log("file name is updated")
// })

// For Deleting file ----------------------------
// fs.unlinkSync(`${dirPath}/fruit.txt`);