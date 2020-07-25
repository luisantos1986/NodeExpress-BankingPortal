const fs = require("fs")
const path = require("path")
const express = require("express")
const {accounts, users, writeJSON} = require(path.join(__dirname, 'data.js'))
const accountRoutes = require(path.join(__dirname, 'routes', 'accounts.js'))
const servicesRoutes = require(path.join(__dirname, 'routes', 'services.js'))


const app = express()

app.use('/',express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: true}));
app.use('/account', accountRoutes)
app.use('/services', servicesRoutes)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', {title: "Account Summary", accounts})
})

app.get('/profile', (req,res) => res.render('profile', {user: users[0]}))

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!')
})