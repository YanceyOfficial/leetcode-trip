export interface ICommon {
  isEmpty(): boolean // 判断队列是否为空
  size(): number // 返回队列的个数
  clear(): void // 清空队列
  toString(): string
}

export interface IQueue extends ICommon {
  enqueue(elements: number | number[]): void // 向队尾插入一个或多个元素
  dequeue(): void // 移除队头元素并返回该元素
  peek(): number // 返回队头元素，有时该方法也叫做 front 方法
}

export interface IDeque extends ICommon {
  addFront(element: number): void
  addBack(element: number): void
  removeFront(): void
  removeBack(): void
  peekFront(): void
  peekBack(): void
}
