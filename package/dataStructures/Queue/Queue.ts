import { IQueue } from './types'
import { StringDictionary } from '../../../typings'

export class Queue implements IQueue {
  private items: StringDictionary

  private count: number

  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  public enqueue(...elements: string[]) {
    for (let i = 0; i < elements.length; i += 1) {
      this.items[this.count] = elements[i]
      this.count++
    }
  }

  public dequeue() {
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  public peek() {
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
