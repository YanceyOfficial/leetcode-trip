function noRepeat(data) {
  let res = [],
    map = {}

  data.forEach((item) => {
    if (map[item.id] && map[item.id] < item.w) {
      for (let i = 0; i < res.length; i++) {
        if (item.id === res[i].id) {
          res.splice(i, 1)
          res.push(item)
        }
      }
    } else if (!map[item.id]) {
      res.push(item)
      map[item.id] = item.w
    }
  })

  return res
}

let data = [
  { id: 1, w: 1 },
  { id: 2, w: 2 },
  { id: 1, w: 2 },
  { id: 2, w: 1 },
]
console.log(noRepeat(data))
