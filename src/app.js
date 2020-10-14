const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { consoleLogger, errorLogger } = require('./logs')
const { errors } = require('celebrate')

// Request Error Handler
const boom = require('express-boom')

const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(consoleLogger)
app.use(errorLogger)
app.use(boom())
app.use(routes)
app.use(errors())

module.exports = app
