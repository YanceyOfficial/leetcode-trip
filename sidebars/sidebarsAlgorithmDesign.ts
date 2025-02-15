import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  algorithmDesign: [
    'backtracking',
    'binary-search',
    'bit-manipulation',
    'recursion',
    'union-find',
    'dfs-bfs',
    'prefix-sum',
    'difference-array',
    'monotone-stack',
    'sliding-window',
    'greedy',
    'divide-and-conquer',
    {
      'Dynamic Programming': [
        'dynamic-programming/concept',
        'dynamic-programming/knapsack',
        'dynamic-programming/stock',
        'dynamic-programming/subsequence',
        'dynamic-programming/rob',
      ],
    },
    {
      Sorts: [
        'sort/menu',
        'sort/bubble',
        'sort/heap',
        'sort/quick',
        'sort/merge',
        'sort/insertion',
        'sort/selection',
        'sort/shell',
        'sort/count',
        'sort/bucket',
        'sort/radix',
      ],
    },
    'complexity',
  ],
}

export default sidebars
