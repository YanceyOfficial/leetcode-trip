'use strict'
var e,
  r = require('fs')
!(function (e) {
  ;(e.Easy = 'Easy'),
    (e.Medium = 'Medium'),
    (e.Hard = 'Hard'),
    (e.Others = 'Others')
})(e || (e = {}))
const c = `${process.cwd()}/src/leetcode`
process.cwd()
const t = r.readdirSync(`${c}/${e.Easy}`).length,
  a = r.readdirSync(`${c}/${e.Medium}`).length,
  d = r.readdirSync(`${c}/${e.Hard}`).length,
  o = t + a + d,
  s = [
    { category: e.Easy, count: t },
    { category: e.Medium, count: a },
    { category: e.Hard, count: d },
    { category: 'Total', count: o },
  ]
console.table(s)
