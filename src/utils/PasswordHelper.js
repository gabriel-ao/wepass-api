const bcript = require('bcrypt')

class Password {
  constructor(salt) {
    this._salt = Number(salt)
  }

  async encrypt(password) {
    return await bcript.hash(password, this._salt)
  }

  async compare(password, hash) {
    return await bcript.compare(String(password), String(hash))
  }
}

module.exports = Password
