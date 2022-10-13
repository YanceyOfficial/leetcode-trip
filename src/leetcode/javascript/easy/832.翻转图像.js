/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const len = image.length
  for (let i = 0; i < len; i++) {
    let j = 0,
      k = image[i].length - 1
    while (j < k) {
      ;[image[i][j], image[i][k]] = [image[i][k], image[i][j]]
      j++
      k--
    }

    for (let m = 0; m < image[i].length; m++) {
      image[i][m] ^= 1
    }
  }

  return image
}
// @lc code=end
