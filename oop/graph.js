class Node {
  #edges = []
  #id

  constructor(id) {
    if (!id) {
      throw new Exception("Can't create node without id")
    }

    this.#id = id
  }

  get id () {
    return this.#id
  }

  addEdge(edge) {
    this.#edges.push(edge)
  }

  get edges() {
    return this.#edges
  }
}

class Graph {
  #nodes = {}

  addNode(node) {
    if (!this.#nodes[node]) {
      this.#nodes[node] = new Node(node)
    }
  }

  addEdge(nodeId, nodeEdge) {
    if (!this.#nodes[nodeId]) {
      throw new Exception(`Node ${nodeId} does not exists.`)
    }

    if (!this.#nodes[nodeEdge]) {
      throw new Exception(`Edge Node ${nodeEdge} does not exists.`)
    }

    this.#nodes[nodeId].addEdge(this.#nodes[nodeEdge])
  }

  getNodesLength() {
    return Object.keys(this.#nodes).length
  }

  getFirstNode() {
    const keys = Object.keys(this.#nodes)
    if (!keys.length) {
      throw new Exception('Empty graph.')
    }

    return this.#nodes[keys[0]]
  }
}

module.exports = { Graph }
