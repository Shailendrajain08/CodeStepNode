const fs = require('fs');
const input = process.argv;
 
// Command for run this file without any issues (node takingInputFromCMD.js apple.txt "Worlds biggest smart phones and computer menufecturar")

if(input[2]== 'add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid Output");
}


// fs.writeFileSync(input[2], input[3]);

// console.log(process.argv) 
