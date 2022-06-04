const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override') // use PUT, Delete,...
const walletRouter = require('./routes/WalletRouter')

let app = express()

app.use(bodyParser.json({ limit: 10000 }));
app.use(bodyParser.urlencoded({extended: true, limit: 10000 }));
app.use(cors());

app.use(methodOverride('_method'))

app.use('/', walletRouter)

module.exports = app