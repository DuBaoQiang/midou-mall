import axios from 'axios';

// create an axios instance
const service  = axios.create({
  baseURL: process.env.baseURL,
  timeout: 15000
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request eg: add token ...
    return config
  },
  error => {
    Promise.error(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => Promise.error(error)
)

// export service

export default service
