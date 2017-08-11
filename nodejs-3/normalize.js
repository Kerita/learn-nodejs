var path = require('nodejs-3/fatorial')
var cache = {}

function store(pathname, value) {
  cache[path.normalize(pathname)]  = value
}

store('foo/bar', 1)
store('foo///bar', 2)

console.log(cache)