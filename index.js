function map(array, cb) {
  let r = []

  for (const element of array) {
    let theElement = array[i]
    r.push(cb(theElement))
  }

  return r;
}