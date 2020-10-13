const Joi = require('@hapi/joi')

const ENTITY_VALIDATOR_USER = Joi.object({
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

module.exports = {
  ENTITY_VALIDATOR_USER,
  REQUEST_VALIDATOR_USER,
}
