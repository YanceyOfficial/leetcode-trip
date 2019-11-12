let times = 0
function hanoi(n: number, A: string, B: string, C: string) {
  if (n > 1) {
    // 把 A 上的 n-1 个圆盘借助辅助塔 C 由 A 移到 B
    hanoi(n - 1, A, C, B)
    // 把 n 号(即最大的那个)由 A 移到 C
    hanoi(1, A, B, C)
    // 把B上的 n-1 个圆盘借助辅助塔(A塔)由 B 移到 C
    hanoi(n - 1, B, A, C)
  } else {
    console.log(`第${++times}次移动: ${n}号盘从${A}移动到${C}`)
  }
}
hanoi(3, 'A', 'B', 'C')
