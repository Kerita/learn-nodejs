// 在命令行可以复制成功，但是在webstorm里面却不行
var child_process = require('child_process')
var util = require('util')
var path = require('path')

function copy(source, target, callback) {
  child_process.exec(util.format('cp -r %s/* %s', source, target), callback)
}

copy(path.join(__dirname, ''),path.join(__dirname,'../'), function (err) {
  console.log(err)
})