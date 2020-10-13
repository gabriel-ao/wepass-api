const User = require('../../entity/user')

const { exists } = require('chai').assert

const { USER_MOCK } = require('../../utils/mocks')

describe('Case test User', function () {
  it('Create a user', async () => {
    const response = await User(USER_MOCK)
    exists(response.email)
  })
  it('Not create a user - incomplete name', async () => {
    const _USER_MOCK = { ...USER_MOCK, firstName: 'g' }
    const USER = await User(_USER_MOCK)
    exists(USER.error)
  })
  it('Not create a user - name is integer', async () => {
    const _USER_MOCK = { ...USER_MOCK, firstName: 23 }
    const USER = await User(_USER_MOCK)
    exists(USER.error)
  })
  it('Not create a user - name is array', async () => {
    const _USER_MOCK = { ...USER_MOCK, firstName: ['Bito'] }
    const USER = await User(_USER_MOCK)
    exists(USER.error)
  })
})
