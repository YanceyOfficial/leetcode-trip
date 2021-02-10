function countingSort(nums: number[], maxValue: number) {
  let bucket = new Array(maxValue + 1)
  let sortedIndex = 0
  let len = nums.length
  let bucketLen = maxValue + 1

  for (let i = 0; i < len; i++) {
    if (!bucket[nums[i]]) {
      bucket[nums[i]] = 0
    }
    bucket[nums[i]]++
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      nums[sortedIndex++] = j
      bucket[j]--
    }
  }

  return nums
}

console.log(countingSort([2, 0, 2, 1, 1, 0], 2))
