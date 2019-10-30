export interface ISet {
  add(element: any): void
  delete(element: any): void
  has(element: any): boolean
  clear(): void
  size(): number
  values(): any[] // 返回一个包含集合中所有值(元素)的数组
}
