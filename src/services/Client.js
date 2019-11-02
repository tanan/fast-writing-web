import axios from 'axios'

const apiClient = axios.create({
  // baseURL: `http://localhost:8080`,
  baseURL: `${process.env.VUE_APP_API_URL}`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient