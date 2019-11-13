import { Node } from './Node'
import { IBinarySearchTree } from './types'

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  protected root: Node<T> | null

  constructor() {
    this.root = null
  }

  protected insertNode(parentNode: Node<T> | null, key: T) {
    let current = parentNode
    const node = new Node(key)

    if (current.key) {
      if (key < current.key) {
        current = current.left
        this.insertNode(current, key)
      } else {
        current = current.right
        this.insertNode(current, key)
      }
    } else {
      if (key < current.key) {
        current.left = node
      } else {
        current.right = node
      }
    }
  }

  public insert(key: T) {
    const node = new Node(key)

    if (!this.root) {
      this.root = node
    } else {
      this.insertNode(this.root, key)
    }
  }

  public search(key: T) {
    return !!key
  }

  public remove(key: T) {
    return !!key
  }

  public inOrderTraverse() {
    return []
  }

  public preOrderTraverse() {
    return []
  }

  public postOrderTraverse() {
    return []
  }

  public min() {
    return this.root.key
  }

  public max() {
    return this.root.key
  }
}

const bst = new BinarySearchTree<number>()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(13)
bst.insert(20)

console.dir(bst)
