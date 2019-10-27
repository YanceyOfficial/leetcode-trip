// 用双端队列实现回文

import { Deque } from './Deque'

const palindromeChecker = (value: string): boolean => {
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

console.log(palindromeChecker('德韦恩韦德')) // true
console.log(palindromeChecker('asdfg')) // false
console.log(palindromeChecker('7447')) // true
console.log(palindromeChecker('53231323')) // false
