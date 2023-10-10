const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs')

// app.get('/profile', (req, res) => {
//     const user = {
//         name: 'Shailendra jain',
//         email: 'sjain@gmail.com',
//         city: 'Damoh',
//     }

//     res.render('profile', { user })
// });

app.get('/details', (req, res) => {
    const user = {
        name: 'Shailendra jain',
        email: 'sjain@gmail.com',
        city: 'Damoh',
        Contry: 'Bharat',
        skills: ['html', 'css', 'JS', 'Angular', 'Node']
    }

    res.render('details', { user })
});

app.get('/login', (req, res) => {
    res.render('login')
});
app.listen(3000);