const express = require('express');
const app = express();
const reqFilter = require('./middleware')
const route = express.Router();

// If we want to apply middleware only some of routes then we have to remove app.use(reqFilter) and specify the route where we want to apply middleware 

// app.use(reqFilter)

route.use(reqFilter);
app.get('/', (req, res)=>{
    res.send('Welcome to Home page');
})

app.get('/user', (req, res)=>{
    res.send('Welcome to Users page');
})

app.get('/about', (req, res)=>{
    res.send('Welcome to About page');
})

route.get('/item', (req, res)=>{
    res.send('Welcome to Item page');
})

route.get('/contact', (req, res)=>{
    res.send('Welcome to Contact page');
})

route.get('/details', (req, res)=>{
    res.send('Welcome to Details page');
})

app.use('/', route);

// If we have multiple routes where we want to use middleware then we have to include route for every route and use that 

app.listen(3000);