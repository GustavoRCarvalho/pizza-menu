export function createArray(n, obj) {
  return Array.from({ length: n }, () => obj)
}

export function removeAndShift(array, indexToRemove, initialObject) {
  if (indexToRemove < 0 || indexToRemove >= array.length) {
    return array
  }

  array[indexToRemove] = initialObject

  for (let i = indexToRemove + 1; i < array.length; i++) {
    array[i - 1] = array[i]
  }

  array.pop()
  array.push(initialObject)

  return array
}
