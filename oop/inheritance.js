class Suit {
  #type

  constructor(type) {
    this.#type = type
  }

  get type() {
    return this.#type
  }

  print() {
    console.log(this.#type)
  }
}

class Diamond extends Suit {
  constructor(type) {
    super(type)
  }
}

const diamond = new Diamond('Diamond')

diamond.print()
console.log(diamond.type)
