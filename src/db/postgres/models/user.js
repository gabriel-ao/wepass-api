const Sequelize = require('sequelize')

module.exports = {
  name: 'users',
  constructor: {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      required: true,
    },
    firstName: {
      type: Sequelize.STRING,
      required: true,
    },
    lastName: {
      type: Sequelize.STRING,
      required: true,
    },
    roles: {
      type: Sequelize.STRING,
      required: true,
    },
    email: {
      type: Sequelize.STRING,
      required: true,
    },
    password: {
      type: Sequelize.STRING,
      required: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      default: true,
    },
  },
  options: {
    tableName: 'users',
    freezeTableName: false,
    timestamps: true,
  },
}

// Sequelize.models = {} //Mocha workarround
// Sequelize.model.user || Sequelize.model('user', model)
