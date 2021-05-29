function twoStrings(s1, s2) {
  const charsS1 = {}
  const charsS2 = {}

  s1.split('').forEach((w) => {
    charsS1[w] = (charsS1[w] || 0) + 1
  })

  s2.split('').forEach((w) => {
    charsS2[w] = (charsS2[w] || 0) + 1
  })

  let result = 'NO'
  const keys = Object.keys(charsS2)
  for (let k of keys) {
    if (charsS1[k]) {
      result = 'YES'
      break
    }
  }

  console.log(result)
}

twoStrings('hello', 'world')
