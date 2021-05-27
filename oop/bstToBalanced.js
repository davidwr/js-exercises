class Node {
  #left
  #right
  #value

  constructor(value, leftNode, rightNode) {
    if (!value) {
      throw new Error('Node value required.')
    }

    this.#value = value
    this.#left = leftNode
    this.#right = rightNode
  }

  get left() {
    return this.#left
  }

  set left(leftNode) {
    this.#left = leftNode
  }

  get right() {
    return this.#right
  }

  set right(rightNode) {
    this.#right = rightNode
  }

  get value() {
    return this.#value
  }

  set value(value) {
    this.#value = value
  }

  #nodeExists(a, b) {
    if (a.value === b.value) throw new Error('Node value already exists.')
  }

  #nodeGT(a, b) {
    return a.value > b.value
  }

  #nodeLT(a, b) {
    return a.value < b.value
  }

  addLeft(node) {
    if (!this.#left) {
      return (this.#left = node)
    }

    this.#nodeExists(this.#left, node)

    if (this.#nodeGT(node, this.#left)) {
      return this.#left.addRight(node)
    }

    if (this.#nodeLT(node, this.#left)) {
      return this.#left.addLeft(node)
    }
  }

  addRight(node) {
    if (!this.#right) {
      return (this.#right = node)
    }

    this.#nodeExists(this.#right, node)

    if (this.#nodeGT(node, this.#right)) {
      return this.#right.addRight(node)
    }

    if (this.#nodeLT(node, this.#right)) {
      return this.#right.addLeft(node)
    }
  }

  toJson() {
    return {
      value: this.#value,
      left: this.#left ? this.#left.toJson() : null,
      right: this.#right ? this.#right.toJson() : null,
    }
  }
}

class BinarySearchTree {
  #root = null
  #nodes = []

  constructor(rootNode) {
    if (rootNode) {
      this.#root = rootNode
      this.#nodes.push(rootNode)
    }
  }

  addNode(node) {
    this.#nodes.push(node)
    if (!this.#root) {
      return (this.#root = node)
    }

    if (node.value === this.#root.value) {
      throw new Error('Node value already exists.')
    }

    if (node.value > this.#root.value) {
      return this.#root.addRight(node)
    }

    if (node.value < this.#root.value) {
      return this.#root.addLeft(node)
    }
  }

  getNodes() {
    return this.#nodes
  }

  print() {
    console.log(JSON.stringify(this.#root.toJson(), null, 2))
  }
}

const generatedNumbers = []
function getRandomIntWithoutCollision() {
  const value = Math.floor(Math.random() * 100) + 1

  if (!generatedNumbers.includes(value)) {
    generatedNumbers.push(value)
    return value
  }

  return getRandomIntWithoutCollision()
}

const binarySearchTree = new BinarySearchTree()
for (let i = 0; i < 19; i++) {
  const value = getRandomIntWithoutCollision()
  const node = new Node(value)
  binarySearchTree.addNode(node)
}

console.log(binarySearchTree.getNodes().length)
binarySearchTree.print()

function rebalanceTree(bst) {
  const nodes = bst.getNodes()
  const sortedNodes = nodes
    .map((n) => n.value)
    .sort((a, b) => {
      return a - b
    })

  const midIndex = Math.ceil(sortedNodes.length / 2)
  const root = sortedNodes.splice(midIndex, 1)[0]

  const newBst = new BinarySearchTree(new Node(root))
  for (node of sortedNodes) {
    newBst.addNode(new Node(node))
  }

  console.log('--------------------------------------')
  console.log('Rebalanced tree')
  console.log('--------------------------------------')
  newBst.getNodes().length
  newBst.print()
}

rebalanceTree(binarySearchTree)
