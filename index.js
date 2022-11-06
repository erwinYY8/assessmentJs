const stripPrivateProperties = (props, data) => {
  data.forEach(item => props.forEach(p => delete item[p]))
  return data
}

// const res = stripPrivateProperties(['a', 'b'], [
//   {
//     a: '1',
//     b: 2,
//     c: 3,
//     d: 4
//   },
//   {
//     a: '1',
//     b: 2,
//     e: 3,
//     f: 4
//   }
// ])
// console.log(res, 'res');


const excludeByProperty = (prop, data) => {
  return data.filter(item => !item[prop])
}


const data = [
  {
    items: [{ val: 1 }, { val: 2 }, { val: 3 }]
  },
  {
    items: [{ val: 0 }, { val: 1 }]
  }
]

// [{ items: 6 }, { items: 1 }]
const sumDeep = (data) => {
  data.forEach(item => {
    const sum = item['items'].reduce((pre, cur) => pre + cur.val, 0)
    item['items'] = sum
  })
  return data
}

const sum = sumDeep(data)
console.log(sum, 'sum');


const a = {
  red: [404, 400],
  green: [200, 201],
}
const b = [
  {
    status: 404,
  },
  {
    status: 200,
  },
  {
    status: 404,
  },
  {
    status: 201,
  },
  {
    status: 400,
  },
  {
    status: 408,
  },
]

const r = [
  {
    status: 404,
    color: "red",
  },
  {
    status: 200,
    color: "green",
  },
  {
    status: 404,
    color: "red",
  },
  {
    status: 201,
    color: "green",
  },
  {
    status: 400,
    color: "red",
  },
]

const applyStatusColor = (a, b) => {
  const statusMap = new Map
  Object.keys(a).forEach(color => {
    a[color].forEach(status => {
      statusMap.set(status, color)
    })
  })

  const defaultColor = 'default'
  return b.map(m => {
    m.color = statusMap.get(m.status) || defaultColor
    return m
  })
  .filter(f => {
    return f.color !== defaultColor
  })
}

console.log(applyStatusColor(a, b), 'applyStatusColor');