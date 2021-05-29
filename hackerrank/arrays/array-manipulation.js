function arrayManipulation(n, queries) {
  const arr = []

  let maxNumber = 0

  for (let j = 0; j < queries.length; j++) {
    const subArr = queries[j]
    for (let i = subArr[0] - 1; i <= subArr[1] - 1; i++) {
      arr[i] = (arr[i] || 0) + subArr[2]
      if (arr[i] > maxNumber) {
        maxNumber = arr[i]
      }
    }
  }

  return maxNumber
}

function arrayManipulationDestructure(n, queries) {
  const arr = new Array(n).fill(0)

  let maxNumber = 0

  for (let j = 0; j < queries.length; j++) {
    const [start, end, value] = queries[j]
    arr[start] = arr[start] || {
      start: 0,
      end: 0,
    }
    arr[end] = arr[end] || {
      start: 0,
      end: 0,
    }
    arr[start].start += value
    arr[end].end += value
  }

  let currentNumber = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[j]) {
      currentNumber += arr[j].start
      if (currentNumber > maxNumber) {
        maxNumber = currentNumber
      }
      currentNumber -= arr[j].end
    }
  }

  return maxNumber
}

console.log(
  arrayManipulationDestructure(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
)
console.log(
  arrayManipulationDestructure(4, [
    [2, 3, 603],
    [1, 1, 286],
    [4, 4, 882],
  ])
)

console.log(
  arrayManipulationDestructure(4, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ])
)
