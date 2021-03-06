require('../../config')
const ICrud = require('../base/ICrud')
const { query } = require('express')
const { Sequelize } = require('sequelize')

class Postgres extends ICrud {
  constructor(connection, model) {
    super()
    this._connection = connection
    this._model = this._connection.define(
      model.name,
      model.constructor,
      model.options
    )
    this._model.sync()
  }

  static connect({ db }) {
    return new Sequelize(`${process.env.POSTGRES_URI}${db}`, {
      dialect: 'postgres',
      host: 'localhost',
      quoteIdentifiers: false,
      logging: false,
    })
  }

  async isConnected() {
    try {
      await this._connection.authenticate()
      return true
    } catch (error) {
      return false
    }
  }

  create(data) {
    return this._model.create(data, { raw: true })
  }

  read(query = {}) {
    return this._model.findAll({ where: query, raw: true })
  }

  async update(id, data) {
    delete data.id
    return await this._model.update(data, { where: { id } })
  }

  delete(query) {
    if (!query) {
      return false
    }
    return this._model.destroy({ where: { ...query } })
  }

  drop() {
    return this._model.destroy({ where: {} })
  }
}
module.exports = Postgres
