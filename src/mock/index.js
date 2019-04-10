import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.mock('https://www.easy-mock.com/mock/5c8b77700e11997fba90a4cf/api/v1/user/info?token=admin', getUserInfo)
Mock.setup({
  timeout: 0
})
export default Mock
