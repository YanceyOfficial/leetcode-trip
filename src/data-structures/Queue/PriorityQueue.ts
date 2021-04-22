type PriorityQueueElement<T> = number | [number, T]

export class PriorityQueue<T> {
  private heap: PriorityQueueElement<T>[] = []

  constructor(initData?: PriorityQueueElement<T>[]) {
    if (initData) {
      this.build(initData)
    }
  }

  private build(initData: PriorityQueueElement<T>[]) {
    initData.forEach((data) => this.offer(data))
  }

  private leftChild(idx: number) {
    return idx * 2 + 1
  }

  private rightChild(idx: number) {
    return idx * 2 + 2
  }

  private parentIdx(idx: number) {
    return Math.floor((idx - 1) / 2)
  }

  private swap(i: number, j: number) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }

  private heapify(idx: number) {
    const left = this.leftChild(idx)
    const right = this.rightChild(idx)
    let smallest = idx

    if (Array.isArray(this.heap[smallest])) {
      // if the left child is bigger than the node we are looking at
      if (
        left < this.heap.length &&
        this.heap[smallest][0] < this.heap[left][0]
      ) {
        smallest = left
      }

      // if the right child is bigger than the node we are looking at
      if (
        right < this.heap.length &&
        this.heap[smallest][0] < this.heap[right][0]
      ) {
        smallest = right
      }
    } else {
      // if the left child is bigger than the node we are looking at
      if (left < this.heap.length && this.heap[smallest] < this.heap[left]) {
        smallest = left
      }

      // if the right child is bigger than the node we are looking at
      if (right < this.heap.length && this.heap[smallest] < this.heap[right]) {
        smallest = right
      }
    }

    // if the value of smallest has changed, then some swapping needs to be done
    // and this method needs to be called again with the swapped element
    if (smallest !== idx) {
      this.swap(smallest, idx)
      this.heapify(smallest)
    }
  }

  public size() {
    return this.heap.length
  }

  public offer(e: PriorityQueueElement<T>) {
    // push element to the end of the heap
    this.heap.push(e)

    // the idx of the element we have just pushed
    let idx = this.heap.length - 1

    // if the element is greater than its parent:
    // swap element with its parent

    if (Array.isArray(e)) {
      while (
        idx !== 0 &&
        this.heap[idx][0] > this.heap[this.parentIdx(idx)][0]
      ) {
        this.swap(idx, this.parentIdx(idx))
        idx = this.parentIdx(idx)
      }
    } else {
      while (idx !== 0 && this.heap[idx] > this.heap[this.parentIdx(idx)]) {
        this.swap(idx, this.parentIdx(idx))
        idx = this.parentIdx(idx)
      }
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
