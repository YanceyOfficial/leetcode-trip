---
id: 46-permute
title: 全排列
sidebar_label: 46. 全排列
keywords:
  - backtrack
---

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let n = nums.length
  let res = []
  let track = []
  let backtrack = (track) => {
    if (track.length === n) {
      res.push(track)
      return
    }
    for (let i = 0; i < n; i++) {
      if (!track.includes(nums[i])) {
        track.push(nums[i])
        backtrack(track.slice())
        track.pop()
      }
    }
  }

  backtrack(track)
  return res
}
```
