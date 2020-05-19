import axios from 'axios'
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  instance.interceptors.response.use(config => {
    return config
  }, err => {

  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发送请求
  return instance(config)
}
