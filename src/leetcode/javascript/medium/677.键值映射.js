/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 */

// @lc code=start
var MapSum = function () {
  this.map = new Map()
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.map.set(key, val)
}

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let sum = 0
  this.map.forEach((val, key) => {
    if (key.startsWith(prefix)) {
      sum += val
    }
  })

  return sum
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end
