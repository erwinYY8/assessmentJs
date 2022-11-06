exports.stripPrivateProperties = (props, data) => {
  data.forEach(item => props.forEach(p => delete item[p]))
  return data
}


exports.excludeByProperty = (prop, data) => {
  return data.filter(item => !item[prop])
}


exports.sumDeep = (data) => {
  data.forEach(item => {
    const sum = item['groups'].reduce((pre, cur) => pre + cur.num, 0)
    item['groups'] = sum
  })
  return data
}


exports.applyStatusColor = (a, b) => {
  const statusMap = new Map
  Object.keys(a).forEach(color => {
    a[color].forEach(status => {
      statusMap.set(status, color)
    })
  })

  const def = 'def'
  return b.map(m => {
    m.color = statusMap.get(m.status) || def
    return m
  })
  .filter(f => f.color !== def)
}

exports.createGreeting = (greetFunc, greeting) => name => greetFunc(greeting, name);


exports.setDefaults = () => obj => Object.assign({ promotion: true }, obj);