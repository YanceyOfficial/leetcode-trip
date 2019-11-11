// 用双端队列实现回文

import { Deque } from './Deque'

export const palindromeChecker = (value: string): boolean => {
  const deque = new Deque()

  const valueArr = [...value.toString()]

  for (let i = 0, l = valueArr.length; i < l; i += 1) {
    deque.addBack(valueArr[i])
  }

  let isEq = true

  while (deque.size() > 1 && isEq) {
    isEq = deque.removeBack() === deque.removeFront()
  }

  return isEq
}
