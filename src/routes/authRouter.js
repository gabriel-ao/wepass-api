const express = require('express')
const AuthController = require('../controllers/authControllers')
const { celebrate, Joi, erros, Segments } = require('celebrate')
const { REQUEST_VALIDATOR_AUTH } = require('../utils/validators')

const authRouter = express.Router()

// POST
authRouter.post(
  '/auth',
  celebrate({
    [Segments.BODY]: REQUEST_VALIDATOR_AUTH,
  }),
  AuthController.login
)

module.exports = authRouter
