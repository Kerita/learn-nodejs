/**
 * Created by Kerita on 2017/7/31.
 */
var url = require('url')
//
// console.log(url.parse('https://wwww.baidu.com:8080/foo/bar'))
//
// console.log(url.parse('//www.baidu.com:8080/foo?a=1&b=2'), true, true)

// 以根域名与当前文件夹
// console.log(url.resolve('http://www.baidu.com/foo/bar', '../baz'))

var queryString = require('query-string')

console.log(queryString.parse)