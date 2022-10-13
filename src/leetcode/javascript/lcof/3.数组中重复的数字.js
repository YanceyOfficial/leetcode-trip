/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] !== i) {
      if (nums[nums[i]] === nums[i]) {
        return nums[i]
      } else {
        let tmp = nums[i]
        nums[i] = nums[tmp]
        nums[tmp] = tmp
      }
    }
  }
}
