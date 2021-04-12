export interface ICommon {
  isEmpty(): boolean // 判断队列是否为空
  size(): number // 返回队列的个数
  clear(): void // 清空队列
  toString(): string
}

export interface IQueue<T> extends ICommon {
  enqueue(element: T): void // 向队尾插入一个或多个元素
  dequeue(): T | null // 移除队头元素并返回该元素
  peek(): T | null // 返回队头元素, 有时该方法也叫做 front 方法
}

export interface IDeque<T> extends ICommon {
  addFront(element: T): void // 在队头添加新元素
  addBack(element: T): void // 在队尾添加新元素, 等同于 Queue 的 enqueue
  removeFront(): T | null // 移除队头元素并返回该元素, 等同于 Queue 的 dequeue
  removeBack(): T | null // 移除队尾元素并返回该元素, 等同于 Stack 的 pop
  peekFront(): T | null // 返回队头元素, 等同于 Queue 的 peek
  peekBack(): T | null // 返回队尾元素, 等同于 Stack 的 peek
}
