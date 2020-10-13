const express = require('express')
const UserController = require('../controllers/userController')
const { celebrate, Joi, erros, Segments } = require('celebrate')
const { REQUEST_VALIDATOR_USER } = require('../utils/validators')

const userRouter = express.Router()

// POST
userRouter.post('/user', 
celebrate({ 
    [Segments.BODY]: REQUEST_VALIDATOR_USER 
})
UserController.create
)
// GET
// PATCH
// PUT
// DELETE

module.exports = userRouter
