import { IDeque } from './types'
import { IItem } from '../types'

export class Queue implements IDeque {
  private items: IItem
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public addFront(element: number) {
    this.items[this.lowestCount - 1] = element
  }

  public addBack(...elements: number[]) {
    for (let i = 0; i < elements.length; i += 1) {
      this.items[this.count] = elements[i]
      this.count++
    }
  }

  public removeFront() {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  public removeBack() {
    if (this.isEmpty()) return undefined
    this.count--
    const poppedElm = this.items[this.count]
    delete this.items[this.count]
    return poppedElm
  }

  public peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  public peekBack() {
    if (this.isEmpty()) return undefined
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
