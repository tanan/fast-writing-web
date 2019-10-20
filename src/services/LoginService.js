import axios from 'axios'

const loginApiClient = axios.create({
  // baseURL: `http://localhost:8080`,
  baseURL: `${process.env.VUE_APP_API_URL}`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 15000
})

export default {
  namespaced: true,
  login(data) {
    console.log('data:' + data.user.username)
    return loginApiClient.post('/login', data)
      .then(res => {
        console.log('response' + res)
          const token = res.headers['access-token']
          if (token !== '') {
            console.log('token: ' + token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            res['access-token'] = token
          }
        return res
      })
      .catch(err => {
        console.log('error: ' + err)
      })
  },
  register() {
    if (rootState.auth.userId) {
      headers['user-id'] = rootState.auth.userId
    }
  }
}