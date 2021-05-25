const { Graph } = require('./graph')

const graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.addNode('G')

graph.addEdge('A', 'C')
graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('D', 'E')
graph.addEdge('E', 'F')
graph.addEdge('B', 'G')

console.log(graph.getNodesLength())

class QueueBFS {
  #queue = []
  #explored = {}
  #firstNode

  constructor(rootNode) {
    this.#firstNode = rootNode
  }

  fill() {
    if (!this.#explored[this.#firstNode.id]) {
      console.log(this.#firstNode.id)
      this.#queue.push(this.#firstNode)
      this.#explored[this.#firstNode.id] = true
    }

    this.#queue.forEach((node) => {
      node.edges.forEach((edge) => {
        if (!this.#explored[edge.id]) {
          console.log(edge.id)
          this.#queue.push(edge)
          this.#explored[edge.id] = true
        }
      })
    })

    if (this.#queue.length) {
      this.#queue.shift()
      this.fill()
    }
  }
}

function bfs(graph) {
  const firstNode = graph.getFirstNode()
  const queue = new QueueBFS(firstNode)
  queue.fill(firstNode)
}

bfs(graph)
