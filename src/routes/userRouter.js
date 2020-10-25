const express = require('express')
const UserController = require('../controllers/userController')
const { celebrate, Joi, erros, Segments } = require('celebrate')
const { REQUEST_VALIDATOR_USER } = require('../utils/validators')
const authMiddleware = require('../middleware/auth')
const userRouter = express.Router()

// POST
userRouter.post(
  '/user',
  celebrate({
    [Segments.BODY]: REQUEST_VALIDATOR_USER,
  }),
  UserController.create
)

// GET
userRouter.get('/user', authMiddleware, UserController.getById)

// PATCH
userRouter.patch('/user/deactivate', authMiddleware, UserController.deactivate)
userRouter.patch('/user/activate', authMiddleware, UserController.activate)

// PUT
userRouter.put('/user/:id', UserController.update)

// DELETE
userRouter.delete('/user/:id', UserController.delete)

module.exports = userRouter
