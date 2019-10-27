import { IArrayStack } from './types'

export class Stack implements IArrayStack {
  private readonly items: string[]

  constructor() {
    this.items = []
  }

  public push(...elements: string[]) {
    for (let i = 0; i < elements.length; i += 1) {
      this.items.push(elements[i])
    }
  }

  public pop() {
    return this.items.pop()
  }

  public peek() {
    return this.items[this.items.length - 1]
  }

  public isEmpty() {
    return this.items.length === 0
  }

  public clear() {
    this.items.length = 0
  }

  public size() {
    return this.items.length
  }
}
