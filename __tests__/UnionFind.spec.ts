import { UnionFind } from '../src/algorithm-design/union-find/UnionFind'

describe('UnionFind', () => {
  test('test UnionFind', () => {
    const uf = new UnionFind(20)
    uf.union(1, 2)
    expect(uf.count).toBe(19)
    expect(uf.connected(1, 2)).toBeTruthy()
    uf.union(2, 3)
    expect(uf.count).toBe(18)
    expect(uf.connected(2, 3)).toBeTruthy()
    expect(uf.connected(1, 3)).toBeTruthy()
  })
})
