const arr = require('./hackerrank/resources/inputarray')

console.time('indexOf')
arr.indexOf(1)
console.timeEnd('indexOf')

console.time('forLoop')
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    break
  }
}
console.timeEnd('forLoop')
