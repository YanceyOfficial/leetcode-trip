export interface ISet<T> {
  add(element: T): void
  delete(element: T): void
  has(element: T): boolean
  clear(): void
  size(): number
  values(): T[] // 返回一个包含集合中所有值(元素)的数组
  isEmpty(): boolean
  toString(): string
  union(set: ISet<T>): any // 并集
  intersection(set: ISet<T>): any // 交集
  difference(set: ISet<T>): any // 差集
  isSubsetOf(set: ISet<T>): boolean // 子集
}
