import { IQueue } from './types'
import { Dict } from '../typings'

export class Queue<T> implements IQueue<T> {
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
