const addSuffix = (arr, prefix) => arr.map((val) => `${prefix}/${val}`)

module.exports = {
  leetcode: {
    Easy: addSuffix(
      [
        '1-two-sum',
        '7-reverse-integer',
        '9-is-palindrome',
        '20-valid-parentheses',
        '136-single-number',
        '172-trailing-zeroes',
        '191-hamming-weight',
        '231-is-power-of-two',
        '415-add-string',
      ],
      'easy',
    ),
    Middle: addSuffix(
      [
        '2-two-sum',
        '6-zig-zag-conversion',
        '15-three-sum',
        '16-three-sum-closest',
        '22-genertate-parenthesis',
        '39-combination-sum',
        '40-combination-sum',
        '43-multiply',
        '46-permute',
        '47-permute',
        '75-sort-colors',
        '77-combine',
        '78-subsets',
        '90-subsets-with-dup',
        '216-combination-sum',
        '445-add-strings',
      ],
      'middle',
    ),
    Hard: addSuffix(['4-find-median-sorted-arrays'], 'hard'),
    Others: addSuffix(['classify'], 'others'),
  },
}
