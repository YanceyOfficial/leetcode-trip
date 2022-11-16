/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1
  let high = 0
  for (const pile of piles) {
    high = Math.max(high, pile)
  }

  let k = high
  while (low < high) {
    const speed = low + Math.floor((high - low) / 2)
    const time = getTime(piles, speed)
    if (time <= h) {
      k = speed
      high = speed
    } else {
      low = speed + 1
    }
  }

  return k
}

/**
 * @param {number[]} piles
 * @param {number} speed
 * @return {number}
 */
var getTime = function (piles, speed) {
  let time = 0
  for (const pile of piles) {
    const curTime = Math.ceil(pile / speed)
    time += curTime
  }
  return time
}
// @lc code=end
