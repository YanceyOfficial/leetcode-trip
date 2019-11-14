import { BinarySearchTree } from '../package/DataStructures/Tree/BinarySearchTree'
import { Node } from '../package/DataStructures/Tree/Node'

describe('binarySearchTreeChecker', () => {
  test('test BinarySearchTree', () => {
    const bst = new BinarySearchTree()
    bst.insert(7)
    bst.insert(15)
    bst.insert(5)
    bst.insert(3)
    bst.insert(9)
    bst.insert(8)
    bst.insert(10)
    bst.insert(13)
    bst.insert(12)
    bst.insert(14)
    bst.insert(20)
    bst.insert(18)
    bst.insert(25)

    expect(bst).toBeInstanceOf(BinarySearchTree)
    expect(bst.getRoot()).toBeInstanceOf(Node)

    expect(bst.size()).toBe(13)

    expect(bst.search(7)).toBeTruthy()
    expect(bst.search(20)).toBeTruthy()
    expect(bst.search(32)).toBeFalsy()
    expect(bst.search(6)).toBeFalsy()

    bst.clear()
    expect(bst.isEmpty()).toBeTruthy()
  })
})
