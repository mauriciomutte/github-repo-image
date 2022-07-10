import Axios from 'axios'

const API_URL = 'https://api.github.com'

export const axios = Axios.create({
  baseURL: API_URL,
})

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)
