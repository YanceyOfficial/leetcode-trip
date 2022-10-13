/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start

// 向上拨动一次
const plus = (str, i) => {
  const arr = str.split('')

  if (+arr[i] === 9) {
    arr[i] = 0
  } else {
    arr[i] = +arr[i] + 1
  }

  return arr.join('')
}

// 向下拨动一次
const minus = (str, i) => {
  const arr = str.split('')
  if (+arr[i] === 0) {
    arr[i] = 9
  } else {
    arr[i] = +arr[i] - 1
  }

  return arr.join('')
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const deads = new Set(deadends)
  const queue = ['0000']
  const visited = new Set(['0000'])
  let step = 0

  while (queue.length !== 0) {
    const len = queue.length

    // 将当前队列中的所有节点向周围扩散
    for (let i = 0; i < len; i++) {
      const curr = queue.shift()

      // 跳过死亡密码
      if (deads.has(curr)) continue

      // 找到了结果, 返回
      if (curr === target) return step

      // 将一个节点的相邻节点加入队列
      for (let j = 0; j < 4; j++) {
        const up = plus(curr, j)
        // 避免拨到已经拨过的密码
        if (!visited.has(up)) {
          queue.push(up)
          visited.add(up)
        }

        const down = minus(curr, j)
        // 避免拨到已经拨过的密码
        if (!visited.has(down)) {
          queue.push(down)
          visited.add(down)
        }
      }
    }
    step++
  }

  // 如果穷举完都没找到目标密码, 那就是找不到了
  return -1
}
// @lc code=end
