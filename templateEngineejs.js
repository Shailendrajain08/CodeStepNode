const express = require('express');
const path = require('path');

const app = express();

// if we are working with templateEngine we have to create a folder name views bacause every template engine either ejs or pug or any other it will require a folder called view to run template engine without view folder template engines will not work. 

app.set('view engine', 'ejs')

app.get('/profile', (req, res)=>{
   const user = {
    name:'Shailendra jain',
    email:'sjain@gmail.com',
    city:'Damoh',

   }
   
    res.render('profile',{user})
});

app.listen(3000);