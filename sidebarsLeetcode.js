const addSuffix = (arr, prefix) => arr.map((val) => `${prefix}/${val}`)

module.exports = {
  leetcode: {
    Easy: addSuffix(
      [
        '1-two-sum',
        '136-single-number',
        '141-has-cycle',
        '172-trailing-zeroes',
        '191-hamming-weight',
        '231-is-power-of-two',
        '415-add-string',
        '876-middle-node',
      ],
      'easy',
    ),
    Medium: addSuffix(
      [
        '2-two-sum',
        '15-three-sum',
        '22-genertate-parenthesis',
        '39-combination-sum',
        '40-combination-sum',
        '43-multiply',
        '46-permute',
        '47-permute',
        '77-combine',
        '78-subsets',
        '90-subsets-with-dup',
        '142-detect-cycle',
        '216-combination-sum',
        '445-add-strings',
      ],
      'medium',
    ),
    Hard: addSuffix(['4-find-median-sorted-arrays'], 'hard'),
    Others: addSuffix(['classify'], 'others'),
  },
}
