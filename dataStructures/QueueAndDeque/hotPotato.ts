// 循环队列实现击鼓传花

import { Queue } from './Queue'

const hotPotato = (elementsList: string[], num: number) => {
  const queue = new Queue()
  const elimitatedList = []
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i += 1) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 2)

result.eliminated.forEach(name => {
  console.log(`${name} 在击鼓传花游戏中被淘汰。`)
})
console.log(`胜利者: ${result.winner}`)

/*
 * Camila 在击鼓传花游戏中被淘汰。
 * John 在击鼓传花游戏中被淘汰。
 * Carl 在击鼓传花游戏中被淘汰。
 * Jack 在击鼓传花游戏中被淘汰。
 * 胜利者: Ingrid
 */
