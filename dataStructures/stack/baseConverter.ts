import { Stack } from './ArrayStack'

const baseConverter = (number: number, base: number) => {
  const stack = new Stack()
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
    res += digits[stack.pop()]
  }

  return res
}

console.log(baseConverter(100345, 16))