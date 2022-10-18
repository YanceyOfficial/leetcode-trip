/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.map = new Map()
  this.nums = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false

  const idx = this.nums.length
  this.map.set(val, idx)
  this.nums.push(val)
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false

  const idx = this.map.get(val)
  this.nums[idx] = this.nums[this.nums.length - 1]
  this.map.set(this.nums[idx], idx)
  this.nums.pop()
  this.map.delete(val)
  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * this.nums.length)
  return this.nums[randomIdx]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
