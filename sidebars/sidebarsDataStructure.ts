import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  dataStructure: [
    'stack/stack',
    {
      Queue: ['queue/queue', 'queue/priority-queue'],
    },
    {
      LinkedList: ['linkedlist/linkedlist', 'linkedlist/doubly-linkedlist'],
    },
    'dictionary/dictionary',
    'hashmap/hashmap',
    'set/set',
    {
      Tree: [
        'tree/concept',
        'tree/traversal',
        'tree/bst',
        'tree/avl',
        'tree/binary-heap',
      ],
    },
    { Graph: ['graph/concept', 'graph/dfs', 'graph/bfs'] },
  ],
}

export default sidebars
