const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const api = require("./router/api")
const mongoose = require( 'mongoose' )
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/BankDB', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)

const PORT = 3100
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
