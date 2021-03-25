/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // deque 中存储的是 num 的下标
  const deque = []
  const maxs = []
  const len = nums.length

  if (len === 0 && k <= 0) return maxs

  for (let i = 0; i < len; i++) {
    // 如果队列不为空且队尾对应的 num 小于当前遍历到的值,
    // 则弹出当前队尾, 直到队尾没有小于 i 所对应的元素,
    // 这样就确保了队首对应的元素始终是最大的.
    while (deque.length !== 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }

     // 队尾弹入 i
    deque.push(i)

    // 检测队首所对应的元素是否还在窗口中, 不在则弹出
    if (deque[0] <= i - k) {
      deque.shift()
    }

    //只有当 i >= 窗口大小时才能写入窗口的最大值
    if (i >= k - 1) {
      maxs.push(nums[deque[0]])
    }
  }

  return maxs
}
// @lc code=end
