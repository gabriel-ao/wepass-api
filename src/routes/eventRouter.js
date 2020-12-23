const express = require('express')
const EventController = require('../controllers/eventController')
const { celebrate, Joi, erros, Segments } = require('celebrate')
const { REQUEST_VALIDATOR_EVENT } = require('../utils/validators')
const authMiddleware = require('../middleware/auth')
const eventRouter = express.Router()

// POST
eventRouter.post(
  '/event',
  celebrate({
    [Segments.BODY]: REQUEST_VALIDATOR_EVENT,
  }),
  authMiddleware,
  EventController.create
)

module.exports = eventRouter
