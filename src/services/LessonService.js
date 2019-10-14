import axios from 'axios'

const apiClient = axios.create({
  // baseURL: `http://localhost:8080`,
  baseURL: `${process.env.VUE_APP_API_URL}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLesson(id) {
    return apiClient.get('/lessons/' + id)
  },
  getCardsByLessonId(id) {
    return apiClient.get('/lessons/' + id + '/contents')
  },
  getCard(id) {
    return apiClient.get('/contents/' + id)
  }
}