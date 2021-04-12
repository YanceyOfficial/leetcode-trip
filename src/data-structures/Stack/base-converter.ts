// 用栈实现进制计算器

import { Stack } from './ArrayStack'

export const baseConverter = (number: number, base: number) => {
  const stack = new Stack<number>()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let rem = number
  let res = ''

  if (base < 2 || base > 36) {
    return ''
  }

  while (rem > 0) {
    stack.push(rem % base)
    rem = Math.floor(rem / base)
  }

  while (!stack.isEmpty()) {
    res += digits[stack.pop() as number]
  }

  return res
}
