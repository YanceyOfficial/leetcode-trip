export interface IHashMap<T> {
  put(key: string, value: T): void
  remove(key: string): boolean
  get(key: string): T | undefined
}
