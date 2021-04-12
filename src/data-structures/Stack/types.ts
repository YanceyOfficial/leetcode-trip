export interface ArrayStack<T> {
  push(element: T): void // 添加一个新元素到栈顶
  pop(): T | null // 移除栈顶的元素, 同时返回被移除的元素
  peek(): T | null // 返回栈顶的元素, 不对栈做任何修改
  isEmpty(): boolean // 判断栈是否为空
  clear(): void // 移除栈里的所有元素
  size(): number // 返回栈里的元素个数
}

export interface ObjectStack<T> extends ArrayStack<T> {
  toString(): string
}
