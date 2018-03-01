export function nextItemId(arr) {
  const test = id => arr.findIndex(elem => elem.id === id)

  let nextId = arr.length
  let result = test(nextId)

  while (result !== -1) {
    nextId++
    result = test(nextId)
  }
  return nextId
}
