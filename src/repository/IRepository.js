class IRepository {
  async isConnected() {
    return await this.db.isConnected()
  }

  async create(entity) {
    return await this.db.create(entity)
  }

  async findAll() {
    return await this.db.read({})
  }

  async find(query) {
    return await this.db.read(query)
  }

  async findById(id) {
    return await this.db.read({ id: id })
  }

  async update(query, data) {
    const exists = await this.find(query)
    if (exists) return await this.db.update(exists.id, data)

    return 'não foi possivel atualizar'
  }

  async findAndModify(query, data) {
    return await this.db.findAndModify(query, data)
  }

  async delete(id) {
    const exists = await this.findById(id)
    if (exists) return await this.db.delete(id)

    return 'dados não existem'
  }
}

module.exports = IRepository
