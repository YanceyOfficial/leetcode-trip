interface UF {
  // 将 p 和 q 连接
  union(p: number, q: number): void

  // 判断 p 和 q 是否连通
  connected(p: number, q: number): boolean
}

export class UnionFind implements UF {
  public count: number

  private parents: number[]

  private sizes: number[]

  // n 为图的节点总数
  constructor(n: number) {
    this.count = n

    this.parents = new Array(10).fill(0)
    this.sizes = new Array(10).fill(0)

    for (let i = 0; i < n; i++) {
      this.parents[i] = i
      this.sizes[i] = 1
    }
  }

  private find(x: number) {
    while (this.parents[x] !== x) {
      // 进行路径压缩
      this.parents[x] = this.parents[this.parents[x]]
      x = this.parents[x]
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
    // 小树接到大树下面, 会比较平衡
    if (this.sizes[rootP] > this.sizes[rootQ]) {
      this.parents[rootQ] = rootP
      this.sizes[rootP] += this.sizes[rootQ]
    } else {
      this.parents[rootP] = rootQ
      this.sizes[rootQ] += this.sizes[rootP]
    }

    // 两个分量合二为一
    this.count--
  }

  public connected(p: number, q: number) {
    const { rootP, rootQ } = this.findPairs(p, q)
    return rootP === rootQ
  }
}
