const { number, date } = require('@hapi/joi')
const Mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const model = new Mongoose.Schema(
  {
    id: {
      type: String,
      immutable: true,
      default: uuidv4(),
    },
    title: {
      type: String,
      required: true,
    },
    dataEvent: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

Mongoose.models = {} //Mocha workarround
module.exports = Mongoose.model.event || Mongoose.model('event', model)
