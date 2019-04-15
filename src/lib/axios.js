import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(
      config => {
        // 做一些全局的请求拦截设置，比如为每个请求添加token
        // if (!Object.keys(this.queue).length) Spin.show() 每次访问请求都会触发往 queue 添加
        this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    instance.interceptors.response.use(
      res => {
        delete this.queue[url] // 删除这个 url 对应的队列内容
        const { data, status } = res
        return { data, status }
      },
      error => {
        delete this.queue[url]
        return Promise.reject(error)
      })
  }

  request (options) {
    const instance = axios.create()
    // assign 两者有相同的属性名，会用后面的属性覆盖前面的
    const tempOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(tempOptions)
  }
}

export default HttpRequest
