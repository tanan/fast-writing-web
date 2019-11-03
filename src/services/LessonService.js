import apiClient from './Client.js'

export default {
  getLessons() {
    return apiClient.get('/lessons')
  },
  getCardsByIdAndLessonId(id) {
    return apiClient.get('/lessons/' + id + '/contents')
  },
  getLessonsByUserId(userId) {
    return apiClient.get("/users/" + userId + "/lessons")
  },
  getCardsByIdAndUserId(id, userId) {
    return apiClient.get("/users/" + userId + "/lessons/" + id + "/contents")
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