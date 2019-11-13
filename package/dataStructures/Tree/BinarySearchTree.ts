import { Node } from './Node'
import { IBinarySearchTree } from './types'

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  private root: number | null

  constructor() {
    this.root = null
  }
}
