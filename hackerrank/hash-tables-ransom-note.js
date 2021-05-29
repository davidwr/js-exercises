function checkMagazine(magazine, note) {
  const magazineHashMap = {}
  const wordHashMap = {}

  note.forEach((w) => {
    wordHashMap[w] = (wordHashMap[w] || 0) + 1
  })

  magazine.forEach((w) => {
    magazineHashMap[w] = (magazineHashMap[w] || 0) + 1
  })

  let result = 'Yes'
  const keys = Object.keys(wordHashMap)

  for (let k of keys) {
    if (!magazineHashMap[k]) {
      result = 'No'
      break
    }

    if (magazineHashMap[k] < wordHashMap[k]) {
      result = 'No'
      break
    }
  }

  console.log(result)
}

checkMagazine(
  ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
  ['ive', 'got', 'some', 'coconuts']
)

checkMagazine(
  ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
  ['ive', 'got', 'some', 'coconuts']
)
