const arr = ['a', 'b', 'c', 'd', 'e']

// arr.unshift(-1, 0)
// console.log(arr)

arr.splice(0, 3, 'A', 'B', 'C')
console.log(arr)
 
console.log(arr.includes('A'))
console.log(arr.indexOf('A') !== -1)