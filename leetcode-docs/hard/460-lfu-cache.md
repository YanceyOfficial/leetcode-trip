---
id: 460-lfu-cache
title: lfu-缓存
sidebar_label: 460. lfu-缓存
---

## 题目

请你为**最不经常使用(LFU)**缓存算法设计并实现数据结构.

实现 LFUCache 类:

- `LFUCache(int capacity)` - 用数据结构的容量 capacity 初始化对象;
- `int get(int key)` - 如果键存在于缓存中, 则获取键的值, 否则返回 -1;
- `void put(int key, int value)` - 如果键已存在, 则变更其值; 如果键不存在, 请插入键值对. 当缓存达到其容量时, 则应该在插入新项之前, 使最不经常使用的项无效. 在此问题中, 当存在平局(即两个或更多个键具有相同使用频率)时, 应该去除**最久未使用**的键.

注意**项的使用次数**就是自插入该项以来对其调用 get 和 put 函数的次数之和. 使用次数会在对应项被移除后置为 0.

为了确定最不常使用的键, 可以为缓存中的每个键维护一个**使用计数器**. 使用计数最小的键是最久未使用的键.

当一个键首次插入到缓存中时, 它的使用计数器被设置为 1 (由于 put 操作). 对缓存中的键执行 get 或 put 操作, 使用计数器的值将会递增.

:::info 示例

```ts
// cnt(x) = 键 x 的使用计数
// cache=[] 将显示最后一次使用的顺序(最左边的元素是最近的)
LFUCache lFUCache = new LFUCache(2);
lFUCache.put(1, 1);   // cache=[1], cnt(1)=1
lFUCache.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lFUCache.get(1);      // 返回 1
                      // cache=[1,2], cnt(2)=1, cnt(1)=2
lFUCache.put(3, 3);   // 去除键 2, 因为 cnt(2)=1, 使用计数最小
                      // cache=[3,1], cnt(3)=1, cnt(1)=2
lFUCache.get(2);      // 返回 -1（未找到）
lFUCache.get(3);      // 返回 3
                      // cache=[3,1], cnt(3)=2, cnt(1)=2
lFUCache.put(4, 4);   // 去除键 1, 1 和 3 的 cnt 相同, 但 1 最久未使用
                      // cache=[4,3], cnt(4)=1, cnt(3)=2
lFUCache.get(1);      // 返回 -1（未找到）
lFUCache.get(3);      // 返回 3
                      // cache=[3,4], cnt(4)=1, cnt(3)=3
lFUCache.get(4);      // 返回 4
                      // cache=[3,4], cnt(4)=2, cnt(3)=3
```

:::

## 题解

### 菜 🐔 解法

```ts
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.caches = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const val = this.caches.get(key)
  // 如果找不到直接返回 -1
  if (val === undefined) return -1

  // 如果能找到, 先删除该 key
  this.caches.delete(key)
  // 再重新 set 一次, 注意要给 frequency +1
  this.caches.set(key, new LFUCacheValue(val.value, val.frequency + 1))

  return val.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  // 如果总包为 0, 都不可能放入缓存, 直接 return 即可
  if (this.capacity === 0) return

  // 如果总包满了, 并且要插入的 key 不存在于 caches 中
  // 因为如果要插入的 key 存在于 caches 中, 可以直接替换旧的, 不会造成容量溢出
  if (this.caches.size === this.capacity && !this.caches.has(key)) {
    // 好啦, 下面就是本菜 🐔 的解法了,
    // 因为 hashmap 是按照插入顺序来的, 所以先把 key 和 frequency 存到一个数组里
    // 然后给这个数组从小到大排序, 因为原生排序是稳定排序, 所以排序也是按照相对顺序的
    // 删除第一个即可
    const temp = []

    this.caches.forEach((v, k) => {
      temp.push({ key: k, frequency: v.frequency })
    })
    temp.sort((a, b) => a.frequency - b.frequency)
    this.caches.delete(temp[0].key)
  }

  const val = this.caches.get(key)
  if (val !== undefined) {
    this.caches.delete(key)
    this.caches.set(key, new LFUCacheValue(value, val.frequency + 1))
  } else {
    this.caches.set(key, new LFUCacheValue(value, 1))
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

### 高端解法

Emmmmm, 毕竟也是道 hard. (安慰自己 ing...) 首先明确这个问题的难点:

- 如果在容量满了的时候进行插入, 则需要将 freq 最小的 key 删除
- 如果最小的 freq 对应多个 key, 则删除其中最旧的那一个

```ts
class LFUCache {
  constructor(capacity) {
    this.size = capacity
    this.valuesMap = new Map() // key, value
    this.timesMap = new Map() // key, 次数
    this.useMap = new Map() // 次数 set{key}
    this.min = 0
  }
  get(key) {
    if (this.valuesMap.has(key)) {
      this.increaseTimes(key)
      return this.valuesMap.get(key)
    }
    return -1
  }
  put(key, value) {
    if (this.size === 0) return
    if (this.valuesMap.has(key)) {
      // 1. 修改
      this.valuesMap.set(key, value)
      this.increaseTimes(key)
    } else {
      // 2. 新增
      if (this.size === this.valuesMap.size) {
        // 2.1 当要超出, 先删除最不常用的
        let minSet = this.useMap.get(this.min)
        let minKey = minSet.keys().next().value
        minSet.delete(minKey)
        this.valuesMap.delete(minKey)
        this.timesMap.delete(minKey)
      }
      // 2.2 新增属性, 更新最小使用次数
      this.valuesMap.set(key, value)
      let useSet = this.useMap.get(1)
      if (!useSet) {
        useSet = new Set()
        this.useMap.set(1, useSet)
      }
      this.timesMap.set(key, 1)
      useSet.add(key)
      this.min = 1
    }
  }
  increaseTimes(key) {
    // 次数加 1
    let times = this.timesMap.get(key)
    let useSet = this.useMap.get(times)
    if (this.min === times && useSet.size === 1) {
      this.min += 1
    }
    useSet.delete(key)
    this.timesMap.set(key, times + 1)
    useSet = this.useMap.get(times + 1)
    if (!useSet) {
      useSet = new Set()
      this.useMap.set(times + 1, useSet)
    }
    useSet.add(key)
  }
}
```
