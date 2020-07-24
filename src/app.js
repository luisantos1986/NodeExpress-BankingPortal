const fs = require("fs")
const path = require("path")
const express = require("express")

const accountData = fs.readFileSync(__dirname+'/json/accounts.json', 'utf-8')
const accounts = JSON.parse(accountData)
const userData = fs.readFileSync(__dirname+'/json/users.json', 'utf-8')
const users = JSON.parse(userData)
const app = express()

app.use('/',express.static(__dirname+'/public'));
app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index', {title: "Index", accounts: accounts})
})

app.get('/savings', (req,res) => {
    res.render('accounts', {account: accounts.savings})
})

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!')
})