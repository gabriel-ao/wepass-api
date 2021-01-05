const EventRepository = require('../repository/eventRepository')
const UserRepository = require('../repository/userRepository')
const MongoDB = require('../db/mongodb')
const boom = require('express-boom')
const entity = require('../entity/event')

const connection = MongoDB.connect({ db: 'wpdb' })

const repository = new EventRepository(connection)
const repositoryUser = new UserRepository(connection)

class EventController {
  async create(req, res) {
    const dataEvent = { ...req.body, userId: req.id }
    const event = entity(dataEvent)
    const response = await repository.create(event)
    res.json(response)
  }

  async getById(req, res) {
    const _id = req.id
    const [verify] = await repositoryUser.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }

    const response = await repository.find({
      userId: _id,
    })
    res.json(response)
  }

  async getAll(req, res) {
    const _id = req.id
    const [verify] = await repositoryUser.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }

    const response = await repository.findAll()
    res.json(response)
  }

  async delete(req, res) {
    const _id = req.params.id
    console.log('chegou backend delete event', _id)

    const [verify] = await repository.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }

    const deleted = await repository.delete(_id)
    console.log('retorno deleted', deleted)

    res.json(deleted)
  }
}

module.exports = new EventController()
