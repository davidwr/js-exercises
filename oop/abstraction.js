class Person {
  /* Private field example */
  #identity

  /* Public field example */
  name = ''

  constructor (name, age, identity) {
    this.name = name
    this.age = age
    this.#identity = identity
  }

  #privateMethod () {
    console.log('Private Method')
  }

  get identity() {
    return this.#identity
  }

  set identity(newIdentity) {
    this.#privateMethod()
    this.#identity = newIdentity
  }
}

const person = new Person('David', 99, '987654-2')
console.log(person)
console.log(person.identity)
person.identity = '123456-9'
console.log(person.identity)