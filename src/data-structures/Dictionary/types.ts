export interface IDictionary<T> {
  set(key: string, value: T): void
  remove(key: string): boolean
  hasKey(key: string): boolean
  get(key: string): T | undefined
  clear(): void
  size(): number
  isEmpty(): boolean
  keys(): string[]
  values(): T[]
  keyValues(): [string, T][]
  forEach(fn: (value: T, key: string) => void): void
  toString(): string
}
