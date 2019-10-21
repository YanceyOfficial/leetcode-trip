interface IStack {
  push(element: number | number[]): void // 添加一个(或多个)新元素到栈顶
  pop(): number // 移除栈顶的元素，同时返回被移除的元素
  peek(): number // 返回栈顶的元素，不对栈做任何修改
  isEmpty(): boolean // 判断栈是否为空
  clear(): void // 移除栈里的所有元素
  size(): number // 返回栈里的元素个数
}

class Stack implements IStack {
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
console.log(stack.push(1, 2, 3, 4))
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.clear())
