/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let i = 1,
    j = 1
  let sum = 0
  const res = []

  while (i <= target >> 1) {
    if (sum < target) {
      sum += j
      j++
    } else if (sum > target) {
      sum -= i
      i++
    } else {
      const tmp = []
      for (let k = i; k < j; k++) {
        tmp.push(k)
      }
      res.push(tmp)
      sum -= i
      i++
    }
  }

  return res
}

console.log(findContinuousSequence(15))
