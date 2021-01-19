---
id: stack
title: 栈
sidebar_label: 栈
---

## 特性

LIFO (后进先出)

## 用途

- 编译器和内存中保存变量、方法调用

- 浏览器历史记录

- 存储访问过的任务或路径

- 撤销操作

- [括号匹配 (20. 有效的括号)](../leetcode/easy/20-valid-parentheses)

## 实现

```ts
interface ArrayStack<T> {
  push(element: T): void // 添加一个新元素到栈顶
  pop(): T | null // 移除栈顶的元素, 同时返回被移除的元素
  peek(): T | null // 返回栈顶的元素, 不对栈做任何修改
  isEmpty(): boolean // 判断栈是否为空
  clear(): void // 移除栈里的所有元素
  size(): number // 返回栈里的元素个数
  toString(): string // 返回栈里的元素个数
}

interface Dict<T> {
  [key: string]: T
}

class Stack<T> implements ObjectStack<T> {
  private readonly items: Dict<T>

  private count: number

  constructor() {
    this.items = {}
    this.count = 0
  }

  public push(element: T) {
    this.items[this.count] = element
    this.count++
  }

  public isEmpty() {
    return this.count === 0
  }

  public pop() {
    if (this.isEmpty()) return null
    this.count--
    const poppedElm = this.items[this.count]
    delete this.items[this.count]
    return poppedElm
  }

  public peek() {
    if (this.isEmpty()) return null
    return this.items[this.count - 1]
  }

  public size() {
    return this.count
  }

  public clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }

  public toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}
```
