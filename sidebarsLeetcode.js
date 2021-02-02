const addSuffix = (arr, prefix) => arr.map((val) => `${prefix}/${val}`)

module.exports = {
  leetcode: {
    Easy: addSuffix(
      [
        '1-two-sum',
        '7-reverse-integer',
        '9-is-palindrome',
        '20-valid-parentheses',
      ],
      'easy',
    ),
    Middle: addSuffix(
      [
        '2-two-sum',
        '6-zig-zag-conversion',
        '15-three-sum',
        '39-combination-sum',
        '40-combination-sum',
        '46-permute',
        '47-permute',
        '77-combine',
        '216-combination-sum',
      ],
      'middle',
    ),
    Hard: addSuffix(['4-find-median-sorted-arrays'], 'hard'),
    Others: addSuffix(['classify'], 'others'),
  },
}
