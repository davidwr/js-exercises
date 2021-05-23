function countPairs(ar) {
  const objetao = {}
  let pairs = 0

  for (let i = 0; i < ar.length; i++) {
    const chave = '_' + ar[i].toString()
    objetao[chave] = (objetao[chave] || 0) + 1
  }

  Object.keys(objetao).map((chave) => {
    if (objetao[chave]) {
      if (objetao[chave] % 2 === 0) {
        pairs += objetao[chave] / 2
      } else {
        pairs += (objetao[chave] - 1) / 2
      }
    }
  })

  return pairs
}

function sockMerchant(n, ar) {
  return countPairs(ar)
}
