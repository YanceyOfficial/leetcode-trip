'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 })
var e = require('child_process'),
  t = require('ora'),
  a = require('node-fetch'),
  r = require('compare-versions'),
  s = require('chalk')
function o(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e }
}
var c,
  n = o(e),
  u = o(t),
  d = o(a),
  i = o(r),
  l = o(s)
!(function (e) {
  ;(e.Easy = 'Easy'),
    (e.Medium = 'Medium'),
    (e.Hard = 'Hard'),
    (e.Others = 'Others')
})(c || (c = {})),
  process.cwd(),
  process.cwd()
const f = async (e) => {
  const t = await (async () => {
      const e = await d.default(
          'https://api.github.com/repos/YanceyOfficial/leetcode-trip/tags',
        ),
        t = (await e.json())[0].name.match(/\d+\.\d+\.\d+/g)
      return t ? t[0] : ''
    })(),
    a = 1 === i.default(t, e)
  return (
    a
      ? console.log(
          l.default.red(
            `\n最新版本为 v${t}, 你的版本 v${e} 已落后, 正在升级中.`,
          ),
        )
      : console.log(l.default.green(`\n已经是最新版本 v${t}, 无需升级.`)),
    a
  )
}
exports.upgrade = async (e, t) => {
  const a = u.default('正在检索最新版本...').start(),
    r = await f(t)
  if ((a.stop(), r)) {
    const t = u.default('正在升级...').start()
    await ((s = e),
    new Promise((e, t) => {
      n.default.exec(s, (a, r) => {
        a ? t(a) : e(r.trim())
      })
    })),
      t.stop(),
      u.default().succeed('升级成功!')
  }
  var s
}
