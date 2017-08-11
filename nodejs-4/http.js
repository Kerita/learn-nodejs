/**
 * Created by Kerita on 2017/7/31.
 */

var http = require('http')

var server = http.createServer(function (request, response) {
  // console.log(request.method,  request.headers)
  var body = []
  request.on('data',  function (chunk) {
    body.push(chunk)
    response.write(chunk)
  })

  request.on('end', function () {
    response.end()
  })
})

server.listen(8000)