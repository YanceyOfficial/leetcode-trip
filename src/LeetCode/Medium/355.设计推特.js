/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.follows = {}
  this.tweets = {}
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  const tweetsOfUser = this.tweets[userId]

  if (tweetsOfUser) {
    this.tweets[userId].push(tweetId)
  } else {
    this.tweets[userId] = [tweetId]
    this.follows[userId] = []
  }
}

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const tweetsOfUser = this.tweets[userId]
  const followsOfUser = this.follows[userId]

  if (!tweetsOfUser || !followsOfUser) return []

  const all = []
  all.push(...tweetsOfUser)
  followsOfUser.map((followeeId) => {
    const tweetsOfFollowee = this.tweets[followeeId]
    if (tweetsOfFollowee) {
      all.push(...tweetsOfFollowee)
    }
  })

  all.sort((a, b) => b - a)
  return all.slice(0, 10)
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  const currUser = this.follows[followerId]

  if (currUser) {
    const currFollows = this.follows[followerId]

    if (currFollows) {
      this.follows[followerId].push(followeeId)
    } else {
      this.follows[followerId] = [followeeId]
    }
  } else {
    this.follows[followerId] = [followeeId]
  }
}

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  const currUser = this.follows[followerId]

  if (currUser) {
    const currFollows = this.follows[followerId]

    if (currFollows) {
      const index = currFollows.indexOf(followeeId)

      if (index > -1) {
        this.follows[followerId].splice(index, 1)
      }
    }
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
const obj = new Twitter()
obj.postTweet(1, 1)
console.log(obj.getNewsFeed(1))
obj.follow(2, 1)
obj.getNewsFeed(2)
obj.getNewsFeed(2)
obj.unfollow(2, 1)
console.log(obj.getNewsFeed(2))
