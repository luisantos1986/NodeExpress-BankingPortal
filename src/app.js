const fs = require("fs")
const path = require("path")
const express = require("express")


const app = express()

app.use(express.static('public'));
app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(8080)