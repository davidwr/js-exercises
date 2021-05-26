const { Graph } = require('./graph')

const graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'E')
graph.addEdge('C', 'F')
graph.addEdge('D', 'F')

console.log(graph.getNodesLength())

class StackDFS {
  #stack = []
  #explored = []
  #firstNode

  constructor(rootNode) {
    this.#firstNode = rootNode
  }

  fill() {
    if (!this.#explored.includes(this.#firstNode.id)) {
      this.#explored.push(this.#firstNode)
    }

    for (let node of this.#explored) {
      console.log(node.id)
      for (let edge of node.edges) {
        this.#stack.unshift(edge)
      }

      while (this.#stack.length) {
        const nextNode = this.#stack.shift()
        if (!this.#explored.filter(n => n.id === nextNode.id).length) {
          this.#explored.push(nextNode)
          break
        }
      }
    }
  }
}

function dfs(graph) {
  const firstNode = graph.getFirstNode()
  const stack = new StackDFS(firstNode)
  stack.fill(firstNode)
}

dfs(graph)
