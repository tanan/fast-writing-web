import axios from 'axios'

axios.defaults.withCredentials = true

export const namespaced = true


export const actions = {
  // async request ({ dispatch, rootState }, { method, url, data, error }) {
  async request ({ rootState }, { method, url, data }) {
    const headers = {}
    headers['Content-Type'] = 'application/json'
    if (rootState.auth.userId) {
      headers['user-id'] = rootState.auth.userId
    }

    const options = {
      method,
      url: `${process.env.VUE_APP_API_URL}${url}`,
      headers,
      data: data,
      timeout: 15000
    }

    return axios(options)
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
        // dispatch(
        //   'message/create',
        //   { error: error, err },
        //   { root: true }
        // )
      })
  },
  async post ({ dispatch }, requests) {
    requests.method = 'post'
    return dispatch('request', requests)
  }
}
