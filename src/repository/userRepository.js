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
}

module.exports = UserRepository
