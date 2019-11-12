// 有一对兔几，从第四个月起每月生一对兔几
// 新生的这对兔几从第四个月起每月又生一对兔几
// 在 20 个月内会有多少对兔几

function rabbitBreeding(n: number) {
  if (n === 1) return n
  return rabbitBreeding(n - 1) * 2
}

console.log(rabbitBreeding(4))
