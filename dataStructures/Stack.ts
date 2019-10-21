interface IStack {
  push(element: any): void
  peek(): any
  pop(): any
  clear(): void
  length(): number
}

class Stack implements IStack {
  private dataStore: any[]
  private top: number

  constructor() {
    this.dataStore = []
    this.top = 0
  }

  public push(element: any) {
    this.dataStore[this.top++] = element
  }
  public peek() {
    return this.dataStore[this.top - 1]
  }
  public pop() {
    return this.dataStore[--this.top]
  }
  public clear() {
    this.top = 0
  }
  public length() {
    return this.top
  }
}

const stack = new Stack()
