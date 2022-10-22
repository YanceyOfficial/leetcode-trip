/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []

  for (const asteroid of asteroids) {
    let alive = true

    while (
      alive &&
      asteroid < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      const top = stack[stack.length - 1],
        curr = -asteroid

      alive = top < curr
      if (top <= curr) stack.pop()
    }

    if (alive) {
      stack.push(asteroid)
    }
  }

  return stack
}
// @lc code=end
