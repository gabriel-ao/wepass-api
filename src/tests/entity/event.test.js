'use strict'
const Event = require('../../entity/event')

const { exists } = require('chai').assert

const { EVENT_MOCK } = require('../../utils/mocks')

describe('Case test Event', function () {
  it('Create a event', function () {
    const response = Event(EVENT_MOCK)
    exists(response.title)
  })

  it('Not create a Event', function () {
    const _EVENT_MOCK = { ...EVENT_MOCK, title: 'g' }
    const response = Event(_EVENT_MOCK)
    exists(response.error)
  })
})
