import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:4000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLesson(id) {
    return apiClient.get('/decrypt/' + id)
  },
  getCardsByLessonId(id) {
    return apiClient.get('/lessons/' + id + '/contents')
  },
  getCard(id) {
    return apiClient.get('/contents/' + id)
  }
}