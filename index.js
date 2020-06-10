function map(array, cb) {
  let r = []

  for (const element of array) {
    r.push(cb(element))
  }

  return r;
}