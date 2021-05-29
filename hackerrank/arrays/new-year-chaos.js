function minimumBribes(q) {
  let bribes = 0
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      return console.log('Too chaotic')
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++
      }
    }
  }

  console.log(bribes)
}

const fs = require('fs')
const l = fs.readFileSync(
  require('path').join(
    process.cwd(),
    'hackerrank',
    'resources',
    'new-year-chaos.txt'
  )
)

const q = l.toString().split('\n')[2]

console.time('minimumBribes')
minimumBribes(q.split(' ').map((v) => parseInt(v)))
console.timeEnd('minimumBribes')
