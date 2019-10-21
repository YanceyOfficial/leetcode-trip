// 链表是由一组节点组成的集合
// 每个节点都使用一个对象的引用指向它的后继
// 指向另一个节点的引用叫做链
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  display() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      currNode = currNode.next;
    }
    console.log(currNode)
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    const prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

const cities = new LinkedList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
cities.remove('Carlisle');
cities.display();

console.log(cities);


