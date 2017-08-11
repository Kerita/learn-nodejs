/**
 * Created by Kerita on 2017/7/27.
 */
var fs = require('fs')
function copy(src, dst) {
  var rs = fs.createReadStream(src)
  var ws = fs.createWriteStream(dst)
  console.log('Start')
  rs.on('data', function (chunk) {
    console.log('Writing....')
    ws.write(chunk)
  })

  rs.on('end', function () {
    console.log('End')
    ws.end();
  })
}

function main(argv) {
  copy(argv[0], argv[1])
}

main(process.argv.slice(2))
