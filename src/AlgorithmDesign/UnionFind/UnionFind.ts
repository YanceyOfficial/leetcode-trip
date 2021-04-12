interface UF {
  // 将 p 和 q 连接
  union(p: number, q: number): void

  // 判断 p 和 q 是否连通
  connected(p: number, q: number): boolean

  // 返回图中有多少个连通分量
  count: number
}

export class UnionFind implements UF {
  private _count: number
  private _prarents: number[]

  // n 为图的节点总数
  constructor(n: number) {
    this._count = n
    this._prarents = new Array(10).fill(0)
    for (let i = 0; i < n; i++) {
      this._prarents[i] = i
    }
  }

  private find(x: number) {
    while (this._prarents[x] !== x) {
      x = this._prarents[x]
    }

    return x
  }

  private findPairs(p: number, q: number) {
    let rootP = this.find(p)
    let rootQ = this.find(q)

    return { rootP, rootQ }
  }

  public union(p: number, q: number) {
    const { rootP, rootQ } = this.findPairs(p, q)

    if (rootP == rootQ) return

    // 将两棵树合并为一棵
    // this._prarents[rootQ] = rootP 也一样
    this._prarents[rootP] = rootQ

    // 两个分量合二为一
    this._count--
  }

  public connected(p: number, q: number) {
    const { rootP, rootQ } = this.findPairs(p, q)
    return rootP === rootQ
  }

  public get count() {
    return this._count
  }
}
