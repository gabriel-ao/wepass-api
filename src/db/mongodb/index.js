require('../../config')
const ICrud = require('../base/ICrud')
const Mongoose = require('mongoose')
const { query } = require('express')

class MongoDB extends ICrud {
  constructor(connection, model) {
    super()
    this._connection = connection
    this._model = model
  }

  static connect({ db }) {
    // console.log('veficando conexao em mongodb index', db)
    Mongoose.connect(
      `${process.env.MONGO_URI}${db}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      (err) => {
        if (!err) return
        console.error(`${process.env.MONGO_URI}${db}`)
        console.error('MongoDB Connection error', err)
      }
    )
    const connection = Mongoose.connection
    if (process.env.NODE_ENV !== 'test') {
      connection.once('open', () => console.log('MongoDB Connected'))
    }
    return connection
  }

  async isConnected() {
    // STATUS = {
    //   0: 'Disconnected',
    //   1: 'Connected',
    //   2: 'Connecting',
    //   3: 'Disconnecting',
    // }

    let status = this._connection.readyState
    if (status === 2) {
      // Delay for wait the connection
      await new Promise((resolve) => setTimeout(resolve, 200))
      status = this._connection.readyState
    }
    return status === 1 ? true : false
  }

  async create(data) {
    return await this._model.create(data)
  }

  async read(query = {}) {
    return await this._model.find(query)
  }

  async update(id, data) {
    return await this._model.updateOne({ id: id }, { $set: data })
  }

  async findAndModify(query, data) {
    return await this._model.findOneAndUpdate(
      query,
      { $set: data },
      { new: true }
    )
  }

  async delete(id) {
    return await this._model.deleteOne({ id: id })
  }

  async drop() {
    return await this._model.dropCollection
  }
}

module.exports = MongoDB
