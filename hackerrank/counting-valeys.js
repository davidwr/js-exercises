function countingValleys(steps, path) {
  let seaLevel = 0
  let valeys = 0

  const pathArray = path.split('')

  for (const direction of pathArray) {
    if (direction === 'D') {
      seaLevel = seaLevel - 1
    }

    if (direction === 'U') {
      seaLevel = seaLevel + 1
    }

    if (seaLevel === 0 && direction === 'U') {
      valeys = valeys + 1
    }
  }

  return valeys
}
