export function createArray(n) {
  return Array.from({ length: n }, () => ({ name: "", color: "" }))
}
