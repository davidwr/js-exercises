class Connection {
  #config = null

  constructor(config) {
    this.#config = config
  }

  get config() {
    return this.#config
  }
}

class ConnectionManager {
  #connection

  constructor(connection) {
    if (!this.#connection) {
      this.#connection = connection
    }
  }

  get connection() {
    if (!this.#connection) {
      this.#connection = new Connection({ config: true })
    }
    return this.#connection
  }
}

const connectionManager = new ConnectionManager(
  new Connection({ config: true })
)

module.exports = connectionManager
