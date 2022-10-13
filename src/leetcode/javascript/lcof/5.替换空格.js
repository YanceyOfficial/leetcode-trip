/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const n = s.length
  let res = ''
  for (let i = 0; i < n; i++) {
    if (s[i] === ' ') {
      res += '%20'
    } else {
      res += s[i]
    }
  }

  return res
}
