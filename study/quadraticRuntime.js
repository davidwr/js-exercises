const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3]

// O(n)
function hasDups(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i === j) continue
      if (a[i] === a[j]) {
        return true
      }
    }
  }
  return false
}

console.time('hasDups')
hasDups(a)
console.timeEnd('hasDups')


// O(n)
function hasDupsObj(a) {
  const obj = {}
  // O (n)
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = (obj[a[i]] || 0) + 1
  }

  // O(n) O(n)
  Object.keys(obj).map(key => {
    if (obj[key] === 2) {
      return true
    }
  })
  return false
}

console.time('hasDupsObj')
hasDupsObj(a)
console.timeEnd('hasDupsObj')
