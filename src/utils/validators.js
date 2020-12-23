const Joi = require('@hapi/joi')

//USER
const ENTITY_VALIDATOR_USER = Joi.object().keys({
  firstName: Joi.string().min(3).max(40).required(),
  lastName: Joi.string().min(3).max(40).required(),
  roles: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).max(30).required(),
  active: Joi.boolean(),
})

const REQUEST_VALIDATOR_USER = Joi.object().keys({
  firstName: Joi.string().min(3).max(40).required(),
  lastName: Joi.string().min(3).max(40).required(),
  roles: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).max(30).required(),
  active: Joi.boolean(),
})

//EVENT
const ENTITY_VALIDATOR_EVENT = Joi.object().keys({
  title: Joi.string().min(3).max(40).required(),
  dataEvent: Joi.date().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  describe: Joi.string().min(8).max(1000).required(),
  userId: Joi.string().required(),
  active: Joi.boolean(),
})

const REQUEST_VALIDATOR_EVENT = Joi.object().keys({
  title: Joi.string().min(3).max(40).required(),
  dataEvent: Joi.date().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  describe: Joi.string().min(8).max(1000).required(),
  userId: Joi.string().required(),
  active: Joi.boolean(),
})

// AUTH
const REQUEST_VALIDATOR_AUTH = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).max(30).required(),
})

module.exports = {
  ENTITY_VALIDATOR_USER,
  REQUEST_VALIDATOR_USER,
  ENTITY_VALIDATOR_EVENT,
  REQUEST_VALIDATOR_EVENT,
  REQUEST_VALIDATOR_AUTH,
}
