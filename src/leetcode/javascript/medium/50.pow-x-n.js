/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let result = 1
  while (n) {
    if (n & 1) result *= x //判断n的二进制最后一位是否是1,  如果是1则将结果乘以x
    x *= x
    n >>>= 1
    //进行无符号右移1位, 此处不能使用有符号右移( >>)
    //当n为-2^31转换成正数时的二进制位“10000000000000000000000000000000”,
    //如果采用有符号右移时会取最左侧的数当符号即( 1), 所以返回的结果是 -1073741824
    /*
          C++ 中只有一种右移运算符——>>; 它的定义如下: 移出的低位舍弃; 
          如果是无符号数, 高位补0; 如果是有符号数, 高位补符号位; 
          而JavaScript中有两种右移运算符——>>和>>>; 其中>>是有符号右移, 
          即高位补符号位( 可能会出现负数变正数, 正数变负数的异常情况); >>>是无符号右移, 高位无脑补0; 
        */
  }
  return result
}

// @lc code=end
