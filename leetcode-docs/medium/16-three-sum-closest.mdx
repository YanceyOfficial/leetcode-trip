---
id: 16-three-sum-closest
title: 最接近的三数之和
sidebar_label: 16. 最接近的三数之和
---

## 题目

给定一个包括 n 个整数的数组 nums 和 一个目标值 target. 找出 nums 中的三个整数, 使得它们的和与 target 最接近. 返回这三个数的和. 假定每组输入只存在唯一答案.

:::info 示例

输入: nums = [-1,2,1,-4], target = 1

输出: 2

解释: 与 target 最接近的和是 2 (-1 + 2 + 1 = 2)
:::

## 题解

```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length
  // 先给数组排序, 便于后面使用双指针
  nums.sort((a, b) => a - b)

  // 初始化一个 ans
  let ans = nums[0] + nums[1] + nums[2]

  // 固定住 i
  for (let i = 0; i < len; i += 1) {
    // 游走 start 和 end
    let start = i + 1,
      end = len - 1

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]

      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }

      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return ans
      }
    }
  }
  return ans
}
```

时间复杂度 O(n²)

空间复杂度 O(1)
