// const arr = [7, 1, 3, 2, 4, 5, 6]
const arr = require('./resources/inputarray')
let swaps = 0

// In Node 16 use indexOf, is better
function indexOfForLoop (arr, position) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i
    }
  }
}

function order(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      continue
    }

    const indexTarget = indexOfForLoop(arr, i + 1)

    const aux = arr[i]
    arr[i] = arr[indexTarget]
    arr[indexTarget] = aux
    swaps++
    i--
  }
}

console.time('swap')
order(arr)
console.timeEnd('swap')
console.log(swaps)
