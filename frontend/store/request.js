import axios from 'axios'

// create an axios instance
const service2 = axios.create({
  baseURL: 'https://localhost:44393',
  // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// response interceptor
service2.interceptors.response.use()

export default service2
