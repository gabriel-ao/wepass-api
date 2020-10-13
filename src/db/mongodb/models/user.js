const Mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const model = new Mongoose.Schema(
  {
    id: {
      type: String,
      immutable: true,
      default: uuidv4(),
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
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
module.exports = Mongoose.model.user || Mongoose.model('user', model)
