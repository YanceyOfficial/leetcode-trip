import { IArrayStack } from './types'

class Stack implements IArrayStack {
  private readonly items: number[]

  constructor() {
    this.items = []
  }

  public push(...elements: number[]) {
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

const stack = new Stack()
console.log(stack.size())
console.log(stack.push(1, 2, 3))
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.clear())
