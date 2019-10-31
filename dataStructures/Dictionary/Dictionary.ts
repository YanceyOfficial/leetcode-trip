import { IDictionary } from './types'

export class Dictionary<T> implements IDictionary<T> {
  private table: any

  constructor() {
    this.table = {}
  }

  public hasKey(key: string) {
    return !!this.table[key]
  }

  public set(key: string, value: T) {
    this.table[key] = value
  }

  public remove(key: string) {
    if (!this.hasKey(key)) return false
    delete this.table[key]
    return true
  }

  public get(key: string) {
    if (!this.hasKey(key)) return undefined
    return this.table[key]
  }

  public clear() {
    this.table = {}
  }

  public size() {
    return this.keys().length
  }

  public isEmpty() {
    return !!this.size()
  }

  public keys() {
    return Object.keys(this.table)
  }

  public values(): T[] {
    return Object.values(this.table)
  }

  public keyValues(): [string, T][] {
    return Object.entries(this.table)
  }

  public forEach(fn: Function) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = fn(valuePairs[i][1], valuePairs[i][0])
      if (result === false) {
        break
      }
    }
  }

  public toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}

// dictionary.forEach((v, k) => console.log(`${k}: ${v}`))
