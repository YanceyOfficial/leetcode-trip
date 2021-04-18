---
id: queue
title: 队列概念
sidebar_label: 队列概念
---

## 特性

FIFO (先进先出)

## 实现

```ts
export interface IQueue<T> {
  enqueue(element: T): void // 向队尾插入一个或多个元素
  dequeue(): T | null // 移除队头元素并返回该元素
  peek(): T | null // 返回队头元素, 有时该方法也叫做 front 方法
  isEmpty(): boolean // 判断队列是否为空
  size(): number // 返回队列的个数
  clear(): void // 清空队列
  toString(): string
}

interface Dict<T> {
  [key: string]: T
}

class Queue<T> implements IQueue<T> {
  private items: Dict<T>

  private count: number

  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public enqueue(element: T) {
    this.items[this.count] = element
    this.count++
  }

  public dequeue() {
    if (this.isEmpty()) return null
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  public peek() {
    if (this.isEmpty()) return null
    return this.items[this.lowestCount]
  }

  public size() {
    return this.count - this.lowestCount
  }

  public isEmpty() {
    return this.size() === 0
  }

  public clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public toString() {
    if (this.isEmpty()) return ''
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
```
