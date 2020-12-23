const EventRepository = require('../repository/eventRepository')
const MongoDB = require('../db/mongodb')
const boom = require('express-boom')
const entity = require('../entity/event')

const connection = MongoDB.connect({ db: 'wpdb' })

const repository = new EventRepository(connection)

class EventController {
  async create(req, res) {
    const dataEvent = { ...req.body, userId: req.id }
    const event = entity(dataEvent)
    const response = await repository.create(event)
    res.json(response)
  }
}

module.exports = new EventController()
