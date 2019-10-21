import { IObjectStack } from './types'

interface IItem {
  [key: string]: number
}

class Stack implements IObjectStack {
  private readonly items: IItem
  private count: number

  constructor() {
    this.items = {}
    this.count = 0
  }

  public push(element: number) {
    this.items[this.count] = element
    this.count++
  }

  public isEmpty() {
    return this.count === 0
  }

  public pop() {
    if (this.isEmpty()) return undefined
    this.count--
    const poppedElm = this.items[this.count]
    delete this.items[this.count]
    return poppedElm
  }

  public peek() {
    if (this.isEmpty()) return undefined
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

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(0)
stack.push(1)
console.log(stack.size())
