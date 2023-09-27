// ------------- First Node Code ------------------------

// var a = 20;
// var b = 30;
// var c = 40;

// console.log(a+b+c);

// ------------------ Importing data from other File ------------------------------

// const app = require('./app')

// const arr = [2,5,7,6]

// arr.push(app.x);

// console.log(app)
// console.log(arr)

// ------------------ Filter Method ------------------------------

const arr = [2,4,8,5,7,6,3,8];

let result = arr.filter((item)=>{
    // return item>4
    // return item === 8
       return item%2 === 0

})

console.log(result)