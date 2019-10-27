const shuffle = (arr: any[]) => {
  let i = arr.length,
    j
  while (i) {
    j = Math.floor(Math.random() * i--)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
