const UserRepository = require('../repository/userRepository')
const MongoDB = require('../db/mongodb')
const boom = require('express-boom')
const entity = require('../entity/user')

const connection = MongoDB.connect({ db: 'wpdb' })
// console.log('verificando conexao em controller ===>>>', connection)
const repository = new UserRepository(connection)
class UserController {
  // POST
  async create(req, res) {
    console.table(req.body)
    const _email = req.body.email
    const [verify] = await repository.findByEmail(_email)
    console.log(verify)
    if (verify) {
      return res.boom.badRequest('Usuario ja existe')
    }

    const user = await entity(req.body)
    const response = await repository.create(user)
    res.json(response)
  }
  // GET
  async getByEmail(req, res) {
    const _email = req.body.email
    const [verify] = await repository.findByEmail(_email)
    if (!verify) {
      return res.boom.notFound()
    }
    res.json(verify)
  }

  async getById(req, res) {
    const _id = req.id
    const [verify] = await repository.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }
    res.json(verify)
  }
  // PATCH

  async deactivate(req, res) {
    const _id = req.id
    const [verify] = await repository.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }
    const deactivated = await repository.deactivate(_id)
    res.json({ message: 'User desativado', id: deactivated.id })
  }

  async activate(req, res) {
    const _id = req.id
    const [verify] = await repository.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }
    const activated = await repository.activate(_id)
    res.json({ message: 'User ativado', id: activated.id })
  }

  // PUT
  async update(req, res) {
    console.log('backend chegou update')
    const _id = req.id
    const data = req.body
    const [verify] = await repository.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }
    const updated = await repository.findAndModify({ id: _id }, data)
    res.json(updated)
  }

  // DELETE
  async delete(req, res) {
    const _id = req.params.id
    const [verify] = await repository.findById(_id)
    if (!verify) {
      return res.boom.notFound()
    }
    const deleted = await repository.delete(_id)
    res.json(deleted)
  }
}

module.exports = new UserController()
