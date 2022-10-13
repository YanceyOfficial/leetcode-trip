/*
实现一个 classify 方法
function classify(nums, k) {}
输入一个整数数组 nums 和整数 k
函数将 nums 数组改变, 使得所有小于 k 的元素移到左边, 所有大于等于 k 的元素移到右边
改变后的 nums 不一定需要是正序排列的
例如
var nums = [4, 5, 2, 1];
classify(nums, 3)
console.log(nums);
// [2, 1, 4, 5]
*/

function classify(nums, k) {
  let low = 0,
    high = nums.length - 1

  while (low <= high) {
    while (low <= high && nums[low] < k) {
      low++
    }

    while (low <= high && nums[high] >= k) {
      high--
    }

    if (low <= high) {
      ;[nums[low], nums[high]] = [nums[high], nums[low]]

      low++
      high--
    }
  }

  return nums
}

console.log(classify([4, 5, 2, 1], 3))
