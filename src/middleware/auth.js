const boom = require('express-boom')
const JwtHelper = require('../utils/jwtHelper')
function authMiddleware(req, res, next) {
  const token = req.headers['x-access-token']

  console.log('token backend', token)
  if (!token) {
    return res.boom.unauthorized('Acesso negado')
  }

  try {
    const decoded = JwtHelper.verify(token)
    req.id = decoded.id
    console.log(decoded)
    next()
  } catch (error) {
    return res.boom.unauthorized('Acesso negado')
  }
}

module.exports = authMiddleware
