/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const pq = new MinHeap()
  const ans = new Array()
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    pq.offer([nums1[i] + nums2[0], i, 0])
  }

  while (pq.size > 0 && k-- > 0) {
    const cur = pq.poll()
    ans.push([nums1[cur[1]], nums2[cur[2]]])
    if (cur[2] < nums2.length - 1)
      pq.offer([nums1[cur[1]] + nums2[cur[2] + 1], cur[1], cur[2] + 1])
  }

  return ans
}

class MinHeap {
  constructor(compare = (a, b) => a[0] - b[0] < 0) {
    this.data = []
    this.size = 0
    this.compare = compare
  }

  peek() {
    return this.size === 0 ? null : this.data[0]
  }

  offer(val) {
    this.data.push(val)
    this._shifUp(this.size++)
  }

  poll() {
    if (this.size === 0) {
      return null
    }
    this._swap(0, --this.size)
    this._shifDown(0)
    return this.data.pop()
  }

  _parent(index) {
    return (index - 1) >> 1
  }

  _child(index) {
    return (index << 1) + 1
  }

  _shifDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index)
      if (
        child + 1 < this.size &&
        this.compare(this.data[child + 1], this.data[child])
      ) {
        child = child + 1
      }
      if (this.compare(this.data[index], this.data[child])) {
        break
      }
      this._swap(index, child)
      index = child
    }
  }

  _shifUp(index) {
    while (
      this._parent(index) >= 0 &&
      this.compare(this.data[index], this.data[this._parent(index)])
    ) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  _swap(a, b) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}

// @lc code=end
