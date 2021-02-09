function countingSort(arr: number[], maxValue: number) {
  var bucket = new Array(maxValue + 1)
  let sortedIndex = 0
  let arrLen = arr.length
  let bucketLen = maxValue + 1

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j
      bucket[j]--
    }
  }

  return arr
}

console.log(countingSort([2, 0, 2, 1, 1, 0], 2))
