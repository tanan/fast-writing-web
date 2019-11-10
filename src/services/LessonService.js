import apiClient from './Client.js'

export default {
  getLessons() {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.get('/lessons')
  },
  getCardsById(id) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.get('/lessons/' + id + '/contents')
  },
  getLessonsByUserId(userId) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.get("/users/" + userId + "/lessons")
  },
  getLessonByIdAndUserId(id, userId) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.get('/users/' + userId + '/lessons/' + id)
  },
  getCardsByIdAndUserId(id, userId) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.get("/users/" + userId + "/lessons/" + id + "/contents")
  },
  createLesson(lesson, userId) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.post("/users/" + userId + "/lessons", lesson)
  },
  createContent(content, lessonId, userId) {
    apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/["]/g,"")
    return apiClient.post("/users/" + userId + "/lessons/" + lessonId + "/contents", content)
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