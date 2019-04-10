import Mock from 'mockjs'
const Random = Mock.Random
export const getUserInfo = (option) => {
  const template = {
    'str|2-4': 'string',
    'str2|3': 'la',
    'age|30-90': 0,
    'float|3-10.2-5': 0,
    'bool|1-9': false,
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2': [1, 3],
    'func': () => {
      return 'this is created by function'
    },
    'reg': /[1-9][a-z]/,
    'email': Mock.mock('@email'),
    date: Random.date('yyyy-MM-dd HH:mm:ss'),
    time: Random.time('hh:mm'),
    now: Random.now(),
    img: '@dataImage',
    paragraph: Random.ctitle(),
    name: Random.cname(),
    url: Random.url('https'),
    domain: Random.domain(),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip(),
    upFirstLetter: Random.upper('lazy'),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    id: Random.id()
  }
  return Mock.mock(template)
}
