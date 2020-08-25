const { v4: uuidv4 } = require('uuid')
const { required } = require('@hapi/joi')
// const { ENTITY_VALIDATOR_BUSINESS } = require('../utils/validators')
const Joi = require('@hapi/joi')

const schema = Joi.object({
  firstName: Joi.string().min(3).max(40).required(),
  lastName: Joi.string().min(3).max(40).required(),
  roles: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).max(30).required(),
  active: Joi.boolean(),
})

async function User({ firstName, lastName, roles, email, password, active }) {
  let _user = {}
  _user.id = uuidv4()
  _user.firstName = firstName
  _user.lastName = lastName
  _user.roles = roles
  _user.email = email
  _user.password = password
  _user.active = active

  function validate() {
    return schema.validate({
      firstName: _user.firstName,
      lastName: _user.lastName,
      roles: _user.roles,
      email: _user.email,
      password: _user.password,
      active: _user.active,
    })
  }

  const validation = validate()

  if (validation.error) {
    return {
      error: 'Failed to create users',
      stack: validation.error,
    }
  }

  return _user
}

module.exports = User
