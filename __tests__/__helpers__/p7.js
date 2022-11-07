
const userInfo = [
  {
    id: 1,
    userName: 'jokey',
    company: 'aa',
    status: 'on'
  },
  {
    id: 2,
    userName: 'kuky',
    company: 'bb',
    status: 'off'
  },
  {
    id: 3,
    userName: 'janms',
    company: 'cc',
    status: 'off'
  },
  {
    id: 4,
    userName: 'curry',
    company: 'dd',
    status: 'on'
  }
]

const company = 'aa'

const status = 'on'

const services = {
  fetchUsers() {
    return Promise.resolve(userInfo)
  }
}

module.exports = {
  userInfo,
  company,
  status,
  services
}