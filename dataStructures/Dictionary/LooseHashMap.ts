import { IHashMap } from './types'

export class HashMap<T> implements IHashMap<T> {
  private table: any

  constructor() {
    this.table = {}
  }

  public getHashCode(key: string): number {
    let hash = 0
    for (let i = 0, l = key.length; i < l; i += 1) {
      hash += key[i].charCodeAt(0)
    }
    return hash % 37
  }

  // 比较推荐的生成索引的算法
  public djb2HashCode(key: string): number {
    let hash = 5381
    for (let i = 0, l = key.length; i < l; i += 1) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }

  public put(key: string, value: T) {
    const hashKey = this.getHashCode(key)
    this.table[hashKey] = value
  }

  public remove(key: string) {
    const res = this.get(key)
    if (!res) return false
    delete this.table[key]
    return true
  }

  public get(key: string) {
    const hashKey = this.getHashCode(key)
    if (!this.table[hashKey]) return undefined
    return this.table[hashKey]
  }
}

const hashMap = new HashMap()
hashMap.put('Gandalf', 'gandalf@email.com')
hashMap.put('John', 'johnsnow@email.com')
hashMap.put('Tyrion', 'tyrion@email.com')

console.log(`${hashMap.getHashCode('Gandalf')} - Gandalf`) // 19 - Gandalf
console.log(`${hashMap.getHashCode('John')} - John`) // 29 - John
console.log(`${hashMap.getHashCode('Tyrion')} - Tyrion`) // 16 - Tyrion

console.log(hashMap.get('John')) // 'johnsnow@email.com'
console.log(hashMap.get('bitch')) // undefined
