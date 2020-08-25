const ICrud = require('./ICrud')

class Strategy extends ICrud {
  constructor(database) {
    super()
    this._database = database
  }
  create(data) {
    return this._database.create(data)
  }
  read(query) {
    return this._database.read(query)
  }
  update(id, data) {
    return this._database.update(id, data)
  }
  findAndModify(query, data) {
    return this._database.findAndModify(query, data)
  }
  delete(id) {
    return this._database.delete(id)
  }
  async isConnected() {
    return this._database.isConnected()
  }
  drop() {
    return this._database.drop()
  }
}

module.exports = Strategy
