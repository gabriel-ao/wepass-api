const express = require('express')

const userRouter = require('./userRouter')
const authRouter = require('./authRouter')
const eventRouter = require('./eventRouter')

const routes = express.Router()

routes.use(authRouter)
routes.use(userRouter)
routes.use(eventRouter)

module.exports = routes
