/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
  const n = s.length
  const res = []

  const backtrack = (begin, segmentIdx, track) => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串, 那么就是一种答案
    if (segmentIdx === 4) {
      if (begin === n) {
        res.push(track.join('.'))
      }
      return
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串, 那么提前回溯
    if (begin === n) return

    // 由于不能有前导零, 如果当前数字为 0, 那么这一段 IP 地址只能为 0
    if (s[begin] === '0') {
      track[segmentIdx] = 0
      backtrack(begin + 1, segmentIdx + 1, track)
    }

    // 一般情况, 枚举每一种可能性并递归
    let segment = 0
    for (let i = begin; i < n; i++) {
      segment = segment * 10 + Number(s[i])
      if (segment > 0 && segment <= 255) {
        track[segmentIdx] = segment
        backtrack(i + 1, segmentIdx + 1, track)
      } else {
        break
      }
    }
  }

  backtrack(0, 0, [])

  return res
}
// @lc code=end
console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('101023'))
