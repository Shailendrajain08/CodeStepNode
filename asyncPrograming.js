// console.log("var execute");

// setTimeout(()=>{
//     console.log("const execute");
// }, 3000)

// console.log("let execute");

// async programming do not wait to for block of code, function or any code to run completly if its taking time to execute it will run new set of code immidietly, previous code is taking time to execute that makes our application fast and superiour

let a = 10;
let b = 0;

setTimeout(()=>{
    b = 30;
}, 3000)

console.log(a+b);

// drawback of async programming is that if some necessary code is need to execute before it's next set of code and that code is taking time then it will not wait for that code it will immediatly execute next set of code and user will not get desired output.