import { ISet } from './types'
import { IItem } from '../../typings'

// 使用对象创建集合一是效率要比数组高
// 二是 JavaScript 的对象不允许一个键指向两个不同的属性，这就保证了集合里的元素都是唯一的

export class MySet implements ISet {
  protected items: IItem

  constructor() {
    this.items = {}
  }

  public add(element: any) {
    if (this.has(element)) return false

    this.items[element] = element
    return true
  }

  public delete(element: any) {
    if (!this.has(element)) return false

    // 复习：delete 不能删除原型链上的属性和方法
    delete this.items[element]
    return true
  }

  public has(element: any) {
    // return element in items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  public clear() {
    this.items = {}
  }

  public size() {
    return this.values.length
  }

  public values() {
    return Object.values(this.items)
  }
}
