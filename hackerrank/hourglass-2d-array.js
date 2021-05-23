function hourglassSum(arr) {
  const hourGlassesTops = []
  const hourGlassesBody = []
  const hourGlassesBottom = []

  arr.forEach((line, index) => {
    if (index < 4) {
      line.forEach((value, index) => {
        if (index < 4) {
          hourGlassesTops.push([line[index], line[index + 1], line[index + 2]])
        }
      })
    }

    if (index > 0 && index < 5) {
      line.forEach((value, index) => {
        if (index > 0 && index < 5) {
          hourGlassesBody.push([line[index]])
        }
      })
    }

    if (index > 1) {
      line.forEach((value, index) => {
        if (index < 4) {
          hourGlassesBottom.push([
            line[index],
            line[index + 1],
            line[index + 2],
          ])
        }
      })
    }
  })

  const completeHourGlasses = []

  hourGlassesTops.forEach((value, i) => {
    completeHourGlasses.push([
      ...hourGlassesTops[i],
      ...hourGlassesBody[i],
      ...hourGlassesBottom[i],
    ])
  })

  const hourGlassesSum = []

  completeHourGlasses.forEach((hourglass) => {
    hourGlassesSum.push(
      hourglass.reduce((a, b) => {
        return a + b
      })
    )
  })

  return hourGlassesSum.reduce((a, b) => {
    return Math.max(a, b)
  })
}
