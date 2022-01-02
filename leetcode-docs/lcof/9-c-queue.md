---
id: 9-c-queue
title: 用两个栈实现队列
sidebar_label: 9. 用两个栈实现队列
---

## 题目

:::success Tips
本题和 [232. 用栈实现队列](/leetcode/easy/232-my-queue/) 是一个题
:::

用两个栈实现一个队列. 队列的声明如下, 请实现它的两个函数 appendTail 和 deleteHead, 分别完成在队列尾部插入整数和在队列头部删除整数的功能. (若队列中没有元素, deleteHead  操作返回 -1)

:::info 示例

输入：

["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]

输出：[null,null,3,-1]

:::

## 题解

```ts
var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) {
    return this.stack2.pop()
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
    if (!this.stack2.length) {
      return -1
    } else {
      return this.stack2.pop()
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

```
