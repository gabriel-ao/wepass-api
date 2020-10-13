// const Postgres = require('../../db/postgres')

const User = require('../../entity/user')
const MongoDB = require('../../db/mongodb')
const UserRepository = require('../../repository/userRepository')

const { exists, equal, property } = require('chai').assert

const USER_MOCK = {
  firstName: 'Bito Oliveira',
  lastName: 'de oliveira',
  roles: 'fornecedor',
  email: 'gabrielao.developer@gmail.com',
  password: 'gabigol10',
  active: true,
}

let _UserRepository = {}

describe('Case test Repository user', function () {
  this.timeout(10000)
  this.beforeAll(() => {
    const connection = MongoDB.connect({
      db: 'wpdb',
    })
    _UserRepository = new UserRepository(connection)
  })

  it('Has connection user', async () => {
    const result = await _UserRepository.isConnected()
    equal(result, true)
  })

  it('Create a user repository', async () => {
    const user = await User(USER_MOCK)
    const result = await _UserRepository.create(user)
    exists(result.id)
  })

  it('Not create a user repository', async () => {
    const _USER_MOCK = { ...USER_MOCK, email: 12 }
    const user = await User(_USER_MOCK)
    exists(user.error)
  })
})
