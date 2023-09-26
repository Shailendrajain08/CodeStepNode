const http = require('http');

//------------------ First Simple server type Recomanded one

http.createServer((req, res)=>{
    res.write("<h1>Hello Shailendra Jain</h1>");
    res.end();
}).listen(3000);

//------------------ Second Simple server type

// const dataControl = (req, res) => {
//     res.write("<h1>Hello, This is Shailendra Jain</h1><br/><h2>Software Engineer</h2>");
//     res.end();
// }

// http.createServer(dataControl).listen(3000)