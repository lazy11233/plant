import axios from './index'

export function getUserInfo () {
  return axios.request({
    url: '/user/info?token=admin',
    method: 'get'
  })
}
