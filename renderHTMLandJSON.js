const express = require('express');
const app = express();

app.get('', (req, res) => {
    // res.send(`<h1>Hello, to home page</h1>`)

    // for junping of from one page to another page
    res.send(`<a href="/about"> Go to about us page`)
})

app.get('/about', (req, res) => {
    res.send(`<input type="text" placeholder="username" />
    <button>Click me</button>`)
})

app.get('/contactus', (req, res) => {
    // for single data ======================
    // res.send({
    //     name:'Shailendra',
    //     email:'sjain@gmail.com'
    // })

    // for multiple data ======================
    res.send([
        {
            name: 'Shailendra',
            email: 'sjain@gmail.com'
        },
        {
            name: 'Dharmendra',
            email: 'djain@gmail.com'
        },
        {
            name: 'Lokendra',
            email: 'ljain@gmail.com'
        },
    ])

})

app.listen(3000);