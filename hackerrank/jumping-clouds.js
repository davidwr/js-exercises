function getCloudType(cloud) {
  if (cloud === 0) return 'cumulus'
  if (cloud === 1) return 'thunderheads'
}

function jumpingClouds(index, path, jumps) {
  const cloudType = getCloudType(path[index])

  if (cloudType) {
    let oneStepAhead = getCloudType(path[index + 1])
    let twoStepsAhead = getCloudType(path[index + 2])

    if (oneStepAhead === 'cumulus' && twoStepsAhead === 'thunderheads') {
      jumps = jumps + 1
      return jumpingClouds(index + 1, path, jumps)
    }

    if (oneStepAhead === 'cumulus' && twoStepsAhead === 'cumulus') {
      jumps = jumps + 1
      return jumpingClouds(index + 2, path, jumps)
    }

    if (oneStepAhead === 'thunderheads' && twoStepsAhead === 'cumulus') {
      jumps = jumps + 1
      return jumpingClouds(index + 2, path, jumps)
    }

    if (oneStepAhead && !twoStepsAhead) {
      jumps = jumps + 1
    }

    return jumps
  }
}

function start(path) {
  return jumpingClouds(0, path, 0)
}
