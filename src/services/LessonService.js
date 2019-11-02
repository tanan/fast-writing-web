import apiClient from './Client.js'

export default {
  getLessons() {
    return apiClient.get('/lessons')
  },
  getLesson(id) {
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