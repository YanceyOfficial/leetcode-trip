---
id: 209-min-sub-array-len
title: 长度最小的子数组
sidebar_label: 209. 长度最小的子数组
keywords:
  - Sliding Window
---

:::success Tips
题目类型: 滑动窗口, 前缀和 + 二分查找

相关题目:

- [3. 无重复字符的最长子串](/leetcode/medium/3-length-of-longest-substring)
- [76. 最小覆盖子串](/leetcode/hard/76-min-window)
- [239. 滑动窗口最大值](/leetcode/hard/239-max-sliding-window)
- [424. 替换后的最长重复字符](/leetcode/medium/424-character-replacement)
- [438. 找到字符串中所有字母异位词](/leetcode/medium/438-find-anagrams)
- [567. 字符串的排列](/leetcode/medium/567-check-inclusion)

:::

## 题目

给定一个含有 n 个**正整数的数组**和一个正整数 target

找出该数组中满足其和**大于等于** target 的长度最小的**连续子数组**, 并返回其长度. 如果不存在符合条件的子数组, 返回 0.

:::info 示例

输入: `target = 7, nums = [2, 3, 1, 2, 4, 3]`

输出: 2

解释: 最小子数组是 `[4,3]`, 因此最小长度是 2
:::

## 题解

:::success Tip
涉及连续子数组的问题, 通常有两种思路: 一是滑动窗口, 二是前缀和(TODO:).

-- 鲁迅
:::

使用滑动窗口来解决:

1. 初始化时让 start 和 end 都置为 0, 维护一个左闭右开的区间 `[left, right)`
2. 先让 nums[end] 累加到 sum
3. 如果 sum < target, 那继续让 end 指针往右滑
4. 直到 sum >= target
   1. 找到当前 totalLen 跟 end - start + 1 哪个更小, 将更小的那个值设为 totalLen
   2. 然后让 sum 尝试减去 nums[start]
   3. 将 start++
5. 将 end++

```ts
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length
  if (len === 0) return 0

  let start = 0
  let end = 0
  let totalLen = Number.MAX_SAFE_INTEGER
  let sum = 0

  while (end < len) {
    sum += nums[end]

    while (sum >= target) {
      totalLen = Math.min(totalLen, end - start + 1)
      sum -= nums[start]
      start++
    }

    end++
  }

  return totalLen == Number.MAX_SAFE_INTEGER ? 0 : totalLen
}
```

时间复杂度: O(n)
