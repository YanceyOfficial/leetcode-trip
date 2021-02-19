# 位运算的一些技巧

## 交换两个数

:::warn
注意这种方式不能用于小数.
:::

```js
let a = 1,
  b = 2

a ^= b
b ^= a
a ^= b
```

## 判断两个数是否异号

利用补码编码的符号位, 如果小于 0, 则证明两数字异号, 这种方式可以用于小数.

```js
const isContrarySign = (-1 ^ 1) < 0 // true

const isContrarySign = (2 ^ 1) < 0 // false
```

类似的, 你可以使用 [Math.sign](https://js.yanceyleo.com/docs/Math/sign/) 判断.

```js
Math.sign(3) //  1
Math.sign(-3) // -1
Math.sign('-3') // -1
Math.sign(0) //  0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
Math.sign('foo') // NaN
Math.sign() // NaN
```
