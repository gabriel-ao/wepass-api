const model = require('../db/mongodb/models/event')
const MongoDB = require('../db/mongodb')
const Strategy = require('../db/base/strategy')
const IRepository = require('./IRepository')

class EventRepository extends IRepository {
  constructor(connection) {
    super()
    this.connection = connection

    this.db = new Strategy(new MongoDB(this.connection, model))
  }
}

module.exports = EventRepository
