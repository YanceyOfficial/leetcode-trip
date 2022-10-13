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
  this.timeline = 0
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
    this.tweets[userId].push({ id: tweetId, timeline: ++this.timeline })
  } else {
    this.tweets[userId] = [{ id: tweetId, timeline: ++this.timeline }]
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

  const all = []

  if (tweetsOfUser) {
    all.push(...tweetsOfUser)
  }

  if (followsOfUser) {
    followsOfUser.map((followeeId) => {
      const tweetsOfFollowee = this.tweets[followeeId]
      if (tweetsOfFollowee) {
        all.push(...tweetsOfFollowee)
      }
    })
  }

  all.sort((a, b) => b.timeline - a.timeline)
  return all.slice(0, 10).map((val) => val.id)
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followerId === followeeId) return

  const currUser = this.follows[followerId]
  if (currUser) {
    if (currUser.includes(followeeId)) return
    this.follows[followerId].push(followeeId)
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
    const index = currUser.indexOf(followeeId)

    if (index > -1) {
      this.follows[followerId].splice(index, 1)
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
