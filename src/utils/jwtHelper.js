const jwt = require('jsonwebtoken')

// padrão.conteudo.assinatura

class JwtHelper {
  static sign(data) {
    const _jwt = jwt.sign(data, process.env.JWT_KEY)
    return _jwt
  }

  static verify(token) {
    const _verify = jwt.verify(token, process.env.JWT_KEY)
    return _verify.decoded
  }
}

module.exports = JwtHelper
