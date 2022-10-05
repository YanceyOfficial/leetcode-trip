---
id: 241-diff-ways-to-compute
title: 为运算表达式设计优先级
sidebar_label: 241. 为运算表达式设计优先级
keywords:
  - Divide and Conquer
---

:::success Tips
题目类型: Divide and Conquer
:::

## 题目

给定一个含有数字和运算符的字符串, 为表达式添加括号, 改变其运算优先级以求出不同的结果. 你需要给出所有可能的组合的结果. 有效的运算符号包含 `+, -, *` .

:::info 示例

输入: `2 * 3 - 4 * 5`

输出: [-34, -14, -10, -10, 10]

解释:

- `(2 * (3 - (4 * 5))) = -34`
- `((2 * 3) - (4 * 5)) = -14`
- `((2 * (3 - 4)) * 5) = -10`
- `(2 * ((3 - 4) * 5)) = -10`
- `(((2 * 3) - 4) * 5) = 10`

:::

## 题解

以 `1 + 2 * 3 - 4 * 5` 为例. 因为题目要求这个算式可以加多层嵌套的括号, 比如 `((1 + 2) * 3 - 4) * 5`, 这么一堆玩意儿要想人肉枚举出来肯定很吃力. 我们转向思考增加一层括号, 可以发现, 能够整出 4 个来, 这正好跟算式中运算符的个数相等.

- `(1) + (2 * 3 - 4 * 5)`

- `(1 + 2) * (3 - 4 * 5)`

- `(1 + 2 * 3) - (4 * 5)`

- `(1 + 2 * 3 - 4) * (5)`

我们再以 `(1 + 2 * 3) - (4 * 5)` 为例, 这里使用的减号分割, 分成了 `1 + 2 * 3` 跟 `4 * 5`, 其实这就是分治的**分**, 那应该怎么**治**呢? 对于 `1 + 2 * 3`, 它又分为两种形式:

- `(1) + (2 * 3) = 7`

- `(1 + 2) * 3 = 9`

因此我们可以写成 `1 + 2 * 3 = [7, 9]`, 而对于 `4 * 5` 就只有一种了, 即 `4 * 5 = [20]`. 针对这一组, 你就能计算出结果是 -13 或者 -11.

```ts
var diffWaysToCompute = function (expression = '(1 + 2 * 3) - (4 * 5)') {
  const res = []
  /****** 分 ******/
  let left = diffWaysToCompute('1 + 2 * 3')
  let right = diffWaysToCompute('4 * 5')
  /****** 治 ******/
  for (const a of left) {
    for (const b of right) {
      res.push(a - b)
    }
  }

  return res
}
```

最终代码如下:

```ts
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const n = expression.length
  const res = []
  for (let i = 0; i < n; i++) {
    const letter = expression[i]
    if (letter === '+' || letter === '-' || letter === '*') {
      /****** 分 ******/
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i + 1))
      /****** 治 ******/
      for (const a of left) {
        for (const b of right) {
          if (letter === '+') res.push(a + b)
          if (letter === '-') res.push(a - b)
          if (letter === '*') res.push(a * b)
        }
      }
    }
  }

  // base case, 代表着你「分」到什么时候可以开始「治」
  // 如果 res 为空, 说明算式是一个数字, 没有运算符, 就说明分完了, 可以治了
  if (res.length === 0) res.push(+expression)

  return res
}
```
