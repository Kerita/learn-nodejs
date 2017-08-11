/**
 * Created by Kerita on 2017/7/31.
 */
var fs = require('fs')
var path = require('path')

function travel(dir, callback, finish) {
  fs.readdir(dir, function (error, files) {
    (function next(i) {
      if (i < files.length) {
        var pathname = path.join(dir, files[i])
        fs.stat(pathname, function (err, stats) {
          if (stats.isDirectory()) {
            travel(pathname, callback, function () {
              next(i+1)
            })
          } else {
            callback(pathname,  function () {
              next(i+1)
            })
          }
        })
      } else {
        finish && finish()
      }
    }(0))
  })
}

travel(__dirname, (pathname, callback) => {
  console.log(pathname)
  callback()
}, () => console.log('finish'))