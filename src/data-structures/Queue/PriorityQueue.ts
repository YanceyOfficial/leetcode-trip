export class PriorityQueue {
  private heap: number[] = []

  private leftChild(index: number) {
    return index * 2 + 1
  }

  private rightChild(index: number) {
    return index * 2 + 2
  }

  private parentIdx(index: number) {
    return Math.floor((index - 1) / 2)
  }

  private swap(i: number, j: number) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }

  private heapify(index: number) {
    const left = this.leftChild(index)
    const right = this.rightChild(index)
    let smallest = index

    // if the left child is bigger than the node we are looking at
    if (left < this.heap.length && this.heap[smallest] > this.heap[left]) {
      smallest = left
    }

    // if the right child is bigger than the node we are looking at
    if (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
      smallest = right
    }

    // if the value of smallest has changed, then some swapping needs to be done
    // and this method needs to be called again with the swapped element
    if (smallest !== index) {
      this.swap(smallest, index)
      this.heapify(smallest)
    }
  }

  public size() {
    return this.heap.length
  }

  public offer(e: number) {
    // push element to the end of the heap
    this.heap.push(e)

    // the index of the element we have just pushed
    let index = this.heap.length - 1

    // if the element is greater than its parent:
    // swap element with its parent
    while (index !== 0 && this.heap[index] < this.heap[this.parentIdx(index)]) {
      this.swap(index, this.parentIdx(index))
      index = this.parentIdx(index)
    }
  }

  public peek() {
    // the root is always the highest priority item
    return this.heap[0]
  }

  public poll() {
    // remove the first element from the heap
    const root = this.heap.shift()

    // put the last element to the front of the heap
    // and remove the last element from the heap as it now
    // sits at the front of the heap
    this.heap.unshift(this.heap[this.heap.length - 1])
    this.heap.pop()

    // correctly re-position heap
    this.heapify(0)

    return root
  }
}

const pq = new PriorityQueue()

pq.offer(2)
pq.offer(1)
pq.offer(5)
pq.offer(4)

console.log(pq)
