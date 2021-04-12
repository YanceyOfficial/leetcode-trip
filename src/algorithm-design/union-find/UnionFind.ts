interface UF {
  // 将 p 和 q 连接
  union(p: number, q: number): void

  // 判断 p 和 q 是否连通
  connected(p: number, q: number): boolean
}

export class UnionFind implements UF {
  public count: number

  private prarents: number[]

  // n 为图的节点总数
  constructor(n: number) {
    this.count = n

    this.prarents = new Array(10).fill(0)

    for (let i = 0; i < n; i++) {
      this.prarents[i] = i
    }
  }

  private find(x: number) {
    while (this.prarents[x] !== x) {
      x = this.prarents[x]
    }

    return x
  }

  private findPairs(p: number, q: number) {
    const rootP = this.find(p)
    const rootQ = this.find(q)

    return { rootP, rootQ }
  }

  public union(p: number, q: number) {
    const { rootP, rootQ } = this.findPairs(p, q)

    if (rootP === rootQ) return

    // 将两棵树合并为一棵
    // this.prarents[rootQ] = rootP 也一样
    this.prarents[rootP] = rootQ

    // 两个分量合二为一
    this.count--
  }

  public connected(p: number, q: number) {
    const { rootP, rootQ } = this.findPairs(p, q)
    return rootP === rootQ
  }
}
