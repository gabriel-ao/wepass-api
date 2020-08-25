const User = require('../../entity/user')
const Postgres = require('../../db/postgres')
const UserRepository = require('../../repository/userRepository')

const { exists, equal, property } = require('chai').assert

const USER_MOCK = {
  firstName: 'Bito Oliveira',
  lastName: 'de oliveira',
  roles: ['fornecedor'],
  email: 'gabrielao.developer@gmail.com',
  password: 'gabigol10',
  active: true,
}

let _UserRepository = {}

describe.only('Case test Repository user', function () {
  this.timeout(1000)
  this.beforeAll(() => {
    const connection = Postgres.connect({
      db: 'wpdb',
    })
    _UserRepository = new UserRepository(connection)
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
