---
id: 146-lru-cache
title: lru-缓存机制
sidebar_label: 146. lru-缓存机制
---

## 题目

设计和实现一个 LRU (最近最少使用) 缓存机制:

- `LRUCache(int capacity)` 以正整数作为容量 capacity 初始化 LRU 缓存

- `int get(int key)` 如果关键字 key 存在于缓存中, 则返回关键字的值, 否则返回 -1.

- `void put(int key, int value)` 如果关键字已经存在, 则变更其数据值; 如果关键字不存在, 则插入该组`关键字-值`. 当缓存容量达到上限时, 它应该在写入新数据之前删除最久未使用的数据值, 从而为新的数据值留出空间.

:::info 示例

```ts
const instance = new LRUCache(2)
instance.put(1, 1) // 缓存是 {1=1}
instance.put(2, 2) // 缓存是 {1=1, 2=2}
instance.get(1) // 返回 1
instance.put(3, 3) // 该操作会使得关键字 2 作废, 缓存是 {1=1, 3=3}
instance.get(2) // 返回 -1 (未找到)
instance.put(4, 4) // 该操作会使得关键字 1 作废, 缓存是 {4=4, 3=3}
instance.get(1) // 返回 -1 (未找到)
instance.get(3) // 返回 3
instance.get(4) // 返回 4
```

:::

## 题解

直接看注释.

```ts
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.caches = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.caches.get(key)

  // 如果不存在, 返回 -1
  if (val === undefined) return -1

  // 如果存在, 因为用过一次了, 就把它删除掉, 重新 set 一次
  this.caches.delete(key)
  this.caches.set(key, val)

  // 如果存在, 返回这个 val
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果存在, 先把它删除
  if (this.caches.has(key)) {
    this.caches.delete(key)
  }

  // 新增 k-v
  this.caches.set(key, value)

  // 如果超过了容量, 就把 Map 最老的那个删除掉
  if (this.caches.size > this.capacity) {
    // 这里用到了迭代器的语法, 很优雅
    this.caches.delete(this.caches.keys().next().value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```
