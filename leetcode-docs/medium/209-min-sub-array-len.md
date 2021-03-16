---
id: 209-min-sub-array-len
title: 长度最小的子数组
sidebar_label: 209. 长度最小的子数组
---

## 题目

这里是题目这里是题目这里是题目这里是题目这里是题目

:::info 示例

输入:

输出:
:::

## 题解

### 方法一: 前缀和 + 二分查找

为了使用二分查找, 需要额外创建一个数组 sums 用于存储数组 nums 的前缀和, 其中 sums[i] 表示从 nums[0] 到 nums[i−1] 的元素和. 得到前缀和之后, 对于每个开始下标 i, 可通过二分查找得到大于或等于 i 的最小下标 bound, 使得 sum[bound] - sum[i - 1] >= s, 并更新子数组的最小长度(此时子数组的长度是 `bound − (i − 1)`).

因为这道题保证了数组中每个元素都为正, 所以前缀和一定是递增的, 这一点保证了二分的正确性. 如果题目没有说明数组中每个元素都为正, 这里就不能使用二分来查找这个位置了.

```java
class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        int n = nums.length;
        if (n == 0) {
            return 0;
        }
        int ans = Integer.MAX_VALUE;
        int[] sums = new int[n + 1];
        // 为了方便计算，令 size = n + 1
        // sums[0] = 0 意味着前 0 个元素的前缀和为 0
        // sums[1] = A[0] 前 1 个元素的前缀和为 A[0]
        // 以此类推
        for (int i = 1; i <= n; i++) {
            sums[i] = sums[i - 1] + nums[i - 1];
        }
        for (int i = 1; i <= n; i++) {
            int target = s + sums[i - 1];
            int bound = Arrays.binarySearch(sums, target);
            if (bound < 0) {
                bound = -bound - 1;
            }
            if (bound <= n) {
                ans = Math.min(ans, bound - (i - 1));
            }
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }
}
```

### 方法二: 滑动窗口

```ts
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let i = 0
  let sum = 0
  let len = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      len = len == 0 ? j - i + 1 : Math.min(len, j - i + 1)
      sum -= nums[i++]
    }
  }
  return len
}
```
