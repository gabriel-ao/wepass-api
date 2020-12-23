const { ENTITY_VALIDATOR_EVENT } = require('../utils/validators')

const schema = ENTITY_VALIDATOR_EVENT

function Event({
  title,
  dataEvent,
  price,
  category,
  describe,
  userId,
  active,
}) {
  let _event = {}
  _event.title = title
  _event.dataEvent = dataEvent
  _event.price = price
  _event.category = category
  _event.describe = describe
  _event.userId = userId
  _event.active = active

  function validate() {
    return schema.validate({
      title: _event.title,
      dataEvent: _event.dataEvent,
      price: _event.price,
      category: _event.category,
      describe: _event.describe,
      userId: _event.userId,
      active: _event.active,
    })
  }

  const validation = validate()

  if (validation.error) {
    return {
      error: 'Failed to create event',
      stack: validation.error,
    }
  }

  return _event
}

module.exports = Event
