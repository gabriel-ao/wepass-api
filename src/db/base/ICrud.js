class StrategyError extends Error {
  constructor() {
    super('This strategy is not implemented')
  }
}

class ICrud {
  async connect() {
    throw new StrategyError()
  }
  create(data) {
    throw new StrategyError()
  }
  read(query) {
    throw new StrategyError()
  }
  update(id, data) {
    throw new StrategyError()
  }
  findAndModify(query, data) {
    throw new StrategyError()
  }
  delete(id) {
    throw new StrategyError()
  }
  async isConnected() {
    throw new StrategyError()
  }
  drop() {
    throw new StrategyError()
  }
}

module.exports = ICrud
