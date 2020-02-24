function addFn(a, b) {
  const lenA = a.length
  const lenB = b.length
  const len = lenA > lenB ? lenA : lenB
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      b = '0' + b
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      a = '0' + a
    }
  }
  const arrA = a.split('').reverse()
  const arrB = b.split('').reverse()
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(parseInt(arrA[i]) + parseInt(arrB[i]))
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      arr[i] -= 10
      arr[i + 1] = parseInt(arr[i + 1]) + 1
    }
  }

  return arr.reverse().join('')
}

let a = addFn('1234599999999999999999999999999999', '66666666')

console.log(a)
