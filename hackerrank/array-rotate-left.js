// Simple solution

function rotLeft (a, d) {
  console.time("rotLeft")
  for (var i = 0; i < d; i++)
    a.push(a.shift())
  console.timeEnd("rotLeft")
  return a
}

console.log(rotLeft([1,2,3,4,5], 4).join(' '))

// Harder solution but faster

function iterar(iteracoes, arr, d) {
  let ultimoIndice
  for (let i = 0; i < arr.length; i++) {
    ultimoIndice = i
    if (iteracoes === d) {
      break
    }
    iteracoes++
  }

  if (iteracoes === d) {
    return ultimoIndice 
  }
  return iterar(iteracoes, arr, d)
}

function rotLeftDavid(arr, d) {
  console.time("rotLeft-david")
  let iteracoes = 0
  let ultimoIndice = iterar(iteracoes, arr, d)
  

  const newArr = []
  for (let i = ultimoIndice; i < arr.length; i++) {
    newArr.push(arr[i])
  }

  const diff = arr.length - newArr.length
  for (let i = 0; i < diff; i++) {
    newArr.push(arr[i])
  }

  console.timeEnd("rotLeft-david")

  return newArr
}

console.log(rotLeftDavid([1,2,3,4,5], 4).join(' '))