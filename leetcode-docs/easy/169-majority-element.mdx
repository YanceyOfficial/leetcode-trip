---
id: 169-majority-element
title: 多数元素
sidebar_label: 169. 多数元素
---

## 题目

给定一个大小为 n 的数组, 找到其中的多数元素. 多数元素是指在数组中出现次数 大于 n / 2 的元素. 你可以假设数组是非空的, 并且给定的数组总是存在多数元素.

:::info 示例

输入: [2,2,1,1,1,2,2]
输出: 2
:::

## 题解

### 摩尔投票算法(Boyer-Moore Voting Algorithm)

它的思路是先将第一个数设为候选. 在遍历中, 如果当前元素等于候选元素, 就将 count 加一, 否则减一; 如果 count 为 0 了, 就把当前元素设为候选
. 遍历完成后, 候选元素就是多数元素.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null,
    count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
      count += 1
    } else {
      count += candidate === nums[i] ? 1 : -1
    }
  }

  return candidate
}
```

时间复杂度 O(n)

空间复杂度 O(1)

### 哈希表

这应该是最能想到的做法. key 存储数字, value 存储相应的个数, 如果这个元素的个数大于等于数组长度的一半, 它就是那个所谓多数元素.

```ts
var majorityElement = function (nums) {
  const n = nums.length
  const map = new Map()

  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)

      if (map.get(nums[i]) >= n / 2) {
        return nums[i]
      }
    } else {
      map.set(nums[i], 1)
    }
  }
}
```

时间复杂度 O(n)

空间复杂度 O(n)
