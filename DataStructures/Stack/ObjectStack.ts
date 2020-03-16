import { IObjectStack } from './types'
import { Dict } from '../typings'

export class Stack<T> implements IObjectStack<T> {
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
