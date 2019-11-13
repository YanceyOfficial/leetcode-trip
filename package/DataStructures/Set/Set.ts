import { ISet } from './types'

// 使用对象创建集合一是效率要比数组高
// 二是 JavaScript 的对象不允许一个键指向两个不同的属性, 这就保证了集合里的元素都是唯一的

export class MySet<T> implements ISet<T> {
  private items: any

  constructor() {
    this.items = {}
  }

  public add(element: T) {
    if (this.has(element)) return false

    this.items[element] = element
    return true
  }

  public delete(element: T) {
    if (!this.has(element)) return false

    // 复习: delete 不能删除原型链上的属性和方法
    delete this.items[element]
    return true
  }

  public has(element: T) {
    // return element in items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  public union(otherSet: ISet<T>) {
    const unionSet = new MySet<T>()

    this.values().forEach((element: T) => unionSet.add(element))
    otherSet.values().forEach((element: T) => unionSet.add(element))

    return unionSet
  }

  // 优化性能后的求交集
  // 迭代小的
  public intersection(otherSet: ISet<T>) {
    const intersectionSet = new MySet<T>()

    let biggerValues = this.values()
    let smallerValues = otherSet.values()

    if (biggerValues.length < smallerValues.length) {
      ;[biggerValues, smallerValues] = [smallerValues, biggerValues]
    }

    smallerValues.forEach((element: T) => {
      if (biggerValues.includes(element)) {
        intersectionSet.add(element)
      }
    })

    return intersectionSet
  }

  public difference(otherSet: ISet<T>) {
    const differenceSet = new MySet<T>()

    this.values().forEach((element: T) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element)
      }
    })

    return differenceSet
  }

  public isSubsetOf(otherSet: ISet<T>) {
    if (this.size() > otherSet.size()) return false

    let isSubset = true
    this.values().every((element: T) => {
      if (!otherSet.has(element)) {
        isSubset = false
        return false
      }
      return true
    })

    return isSubset
  }

  public clear() {
    this.items = {}
  }

  public size() {
    return this.values.length
  }

  public isEmpty() {
    return this.size() === 0
  }

  public values(): T[] {
    return Object.values(this.items)
  }

  public toString() {
    if (this.isEmpty()) {
      return ''
    }
    const values = this.values()
    let objString = `${values[0]}`
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`
    }
    return objString
  }
}
