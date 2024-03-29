import { IDeque } from './types'
import { Dict } from '../typings'

export class Deque<T> implements IDeque<T> {
  private items: Dict<T>

  private count: number

  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  public addBack(element: T) {
    this.items[this.count] = element
    this.count++
  }

  public removeFront() {
    if (this.isEmpty()) return null
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  public removeBack() {
    if (this.isEmpty()) return null
    this.count--
    const poppedElm = this.items[this.count]
    delete this.items[this.count]
    return poppedElm
  }

  public peekFront() {
    if (this.isEmpty()) return null
    return this.items[this.count - 1]
  }

  public peekBack() {
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
