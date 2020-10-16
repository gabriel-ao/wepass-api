// const model = require('../db/postgres/models/user')
// const Postgres = require('../db/postgres')
const model = require('../db/mongodb/models/user')
const MongoDB = require('../db/mongodb')
const Strategy = require('../db/base/strategy')
const IRepository = require('./IRepository')

class UserRepository extends IRepository {
  constructor(connection) {
    super()
    this.connection = connection

    this.db = new Strategy(new MongoDB(this.connection, model))
  }

  // metodos próprios

  async findByEmail(email) {
    return await this.db.read({ email: email })
  }

  async activate(id) {
    const result = await this.db.findAndModify({ id: id }, { active: true })
    return result
  }

  async deactivate(id) {
    const result = await this.db.findAndModify({ id: id }, { active: false })
    return result
  }

  async updateLastLogin(id) {
    return await this.db.update(id, { lastLogin: Date.now() })
  }
}

module.exports = UserRepository
