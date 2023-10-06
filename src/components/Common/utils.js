export function createArray(n, obj) {
  return Array.from({ length: n }, () => obj)
}

export function removeAndShift(array, indexToRemove, initialObject) {
  if (indexToRemove < 0 || indexToRemove >= array.length) {
    // Verifique se o índice é válido
    return array
  }

  // Defina o nome do elemento no índice especificado como uma string vazia
  array[indexToRemove] = initialObject

  // Movimente os elementos à direita do índice especificado para preencher o espaço vago
  for (let i = indexToRemove + 1; i < array.length; i++) {
    array[i - 1] = array[i]
  }

  // Remova o último elemento, que agora é duplicado
  array.pop()
  array.push(initialObject)

  return array
}
