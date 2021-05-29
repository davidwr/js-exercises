function repeatedString(stringToRepeat, considerRange) {
  const tamanho = stringToRepeat.length
  const diferenca = considerRange % tamanho

  const a = stringToRepeat.split('').filter((a) => a === 'a')
  let resultado = a.length * Math.floor(considerRange / tamanho)

  if (diferenca > 0) {
    for (let i = 0; i < diferenca; i++) {
      if (stringToRepeat[i] === 'a') {
        resultado = resultado + 1
      }
    }
  }

  return resultado
}
