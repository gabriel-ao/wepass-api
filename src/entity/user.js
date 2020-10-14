const { required } = require('@hapi/joi')
const PasswordHelper = require('../utils/PasswordHelper')
const { ENTITY_VALIDATOR_USER } = require('../utils/validators')

const schema = ENTITY_VALIDATOR_USER

const passwordHelper = new PasswordHelper(6)

async function User({ firstName, lastName, roles, email, password, active }) {
  let _user = {}
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

  _user.password = await passwordHelper.encrypt(password)
  return _user
}

module.exports = User
