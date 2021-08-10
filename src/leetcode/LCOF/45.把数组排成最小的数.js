/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return quickSort(nums).join('')
}

function quickSort(arr) {
  if (arr.length < 2) return arr

  const pivotIndex = arr.length >> 1
  const pivot = arr.splice(pivotIndex, 1)[0]
  const lows = []
  const highs = []

  for (let i = 0; i < arr.length; i++) {
    const a = `${arr[i]}${pivot}`
    const b = `${pivot}${arr[i]}`

    if (a <= b) {
      lows.push(arr[i])
    } else {
      highs.push(arr[i])
    }
  }

  return quickSort(lows).concat([pivot], quickSort(highs))
}
