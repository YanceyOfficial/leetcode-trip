/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

var getLeastNumbers = function (arr, k) {
  const counter = new Array(10001).fill(0)

  for (const num of arr) {
    counter[num] += 1
  }

  const res = []

  for (let i = 0; i < counter.length; i++) {
    if (res.length === k) break

    let curr = counter[i]
    while (curr-- > 0 && res.length < k) {
      res.push(i)
    }
  }

  return res
}

console.log(getLeastNumbers([0, 0, 2, 3, 2, 1, 1, 2, 0, 4], 6))
