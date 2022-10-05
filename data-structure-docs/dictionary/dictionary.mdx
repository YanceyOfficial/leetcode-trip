---
id: dictionary
title: 字典
sidebar_label: Dictionary
---

## 概念

字典是以 **[键, 值]** 的形式来存储元素.字典也称作 **映射**、**符号表**或**关联数组**.

:::info TIPS
JavaScript 允许我们使用方括号([])获取对象的属性, 将属性名作为"位置" 传入即可, 这也是称它为关联数组的原因.
:::

## 实现

```ts
export interface IDictionary<T> {
  set(key: string, value: T): void
  remove(key: string): boolean
  hasKey(key: string): boolean
  get(key: string): T | undefined
  clear(): void
  size(): number
  isEmpty(): boolean
  keys(): string[]
  values(): T[]
  keyValues(): [string, T][]
  forEach(fn: (value: T, key: string) => void): void
  toString(): string
}

export class Dictionary<T> implements IDictionary<T> {
  private table: any

  constructor() {
    this.table = {}
  }

  public hasKey(key: string) {
    return !!this.table[key]
  }

  public set(key: string, value: T) {
    this.table[key] = value
  }

  public remove(key: string) {
    if (!this.hasKey(key)) return false
    delete this.table[key]
    return true
  }

  public get(key: string) {
    if (!this.hasKey(key)) return undefined
    return this.table[key]
  }

  public clear() {
    this.table = {}
  }

  public size() {
    return this.keys().length
  }

  public isEmpty() {
    return !!this.size()
  }

  public keys() {
    return Object.keys(this.table)
  }

  public values(): T[] {
    return Object.values(this.table)
  }

  public keyValues(): [string, T][] {
    return Object.entries(this.table)
  }

  public forEach(fn: Function) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = fn(valuePairs[i][1], valuePairs[i][0])
      if (result === false) {
        break
      }
    }
  }

  public toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}
```
