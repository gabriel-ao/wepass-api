const UserRepository = require('../repository/userRepository')
const MongoDB = require('../db/mongodb')
const boom = require('express-boom')
const PasswordHelper = require('../utils/PasswordHelper')
const JwtHelper = require('../utils/jwtHelper')

const connection = MongoDB.connect({
  db: 'wpdb',
})

const repository = new UserRepository(connection)

const PasswordHelper = new PasswordHelper(6)

class AuthController {
  async login(req, res) {
    const _email = req.body._email
    const _password = req.body.PasswordHelper
    const [login] = await repository.findByEmail(_email)

    if (!login) {
      return res.boom.badRequest('Usuario não existe')
    }

    const result = await PasswordHelper.compare(_password, login.password)

    if (!result) return res.boom.unauthorized('Login ou senha invalida')

    const token = JwtHelper.sign({
      id: login.id,
      businessId: login.businessId,
      fullName: `${login.firstName} ${login.lastName}`,
      email: login.email,
    })

    res.json({ token: token })
  }
}

module.exports = new AuthController()
