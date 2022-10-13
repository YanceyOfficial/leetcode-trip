/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swap(nums, leftIndex, rightIndex) {
  const temp = nums[leftIndex]
  nums[leftIndex] = nums[rightIndex]
  nums[rightIndex] = temp
}

function shuffle(arr) {
  let i = arr.length,
    j
  while (i) {
    j = Math.floor(Math.random() * i--)
    swap(arr, i, j)
  }
  return arr
}

function partition(nums, low, high) {
  let i = low
  const pivot = nums[high]
  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      swap(nums, i, j)
      i++
    }
  }
  swap(nums, i, high)
  return i
}

var findKthLargest = function (nums, k) {
  shuffle(nums)

  const len = nums.length

  let lo = 0,
    hi = len - 1

  k = len - k

  while (lo <= hi) {
    const p = partition(nums, lo, hi)

    if (p < k) {
      // 第 k 大的元素在 nums[p+1..hi] 中
      lo = p + 1
    } else if (p > k) {
      // 第 k 大的元素在 nums[lo..p-1] 中
      hi = p - 1
    } else {
      // 找到第 k 大元素
      return nums[p]
    }
  }

  return -1
}
// @lc code=end
console.log(findKthLargest([2, 1, 5, 4], 2))
