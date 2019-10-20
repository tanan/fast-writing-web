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

export default {
  getLesson(id, token) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
    return apiClient.get('/lessons/' + id)
  },
  getCardsByLessonId(id) {
    return apiClient.get('/lessons/' + id + '/contents')
  },
  getCard(id) {
    return apiClient.get('/contents/' + id)
  },
  login(data) {
    return apiClient.post('/login', data)
      .then(res => {
          const token = res.headers['access-token']
          if (token !== '') {
            apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
            res['access-token'] = token
          }
        return res
      })
      .catch(err => {
        console.log('error: ' + err)
      })
  }
}