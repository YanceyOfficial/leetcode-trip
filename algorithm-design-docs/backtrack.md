---
id: backtrack
title: 回溯算法
sidebar_label: 回溯算法
---

## 回溯算法套路

回溯算法本身就是一个决策树的遍历过程, 或者说是一个**深度优先遍历(DFS)**的过程.

- 路径

- 选择列表

- 结束条件

```ts
const result = []

function backtrack(路径, 选择列表) {
  if (满足结束条件) {
    result.add(路径)
    return
  }

  for (选择 in 选择列表) {
    做选择
    backtrack(路径, 选择列表)
    撤销选择
  }
}
```

## 参考

[回溯算法解题套路框架](https://labuladong.gitbook.io/algo/suan-fa-si-wei-xi-lie/hui-su-suan-fa-dfs-suan-fa/hui-su-suan-fa-xiang-jie-xiu-ding-ban)

[回溯算法详解(修订版)](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484709&idx=1&sn=1c24a5c41a5a255000532e83f38f2ce4&chksm=9bd7fb2daca0723be888b30345e2c5e64649fc31a00b05c27a0843f349e2dd9363338d0dac61&scene=21#wechat_redirect)
