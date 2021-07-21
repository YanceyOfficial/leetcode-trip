function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const low = []
  const high = []

  for (let i = 0; i < arr.length; i++) {
    const a = `${arr[i]}${pivot}`
    const b = `${pivot}${arr[i]}`

    if (+a < +b) {
      low.push(arr[i])
    } else {
      high.push(arr[i])
    }
  }

  return quickSort(low).concat([pivot], quickSort(high))
}

function minNumber(nums) {
  return quickSort(nums).join('')
}
