const express = require('express')

const userRouter = require('./userRouter')
const authRouter = require('./authRouter')

const routes = express.Router()

routes.use(authRouter)
routes.use(userRouter)

module.exports = routes
