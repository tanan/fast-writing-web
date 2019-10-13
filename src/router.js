import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue';
import FastWriting from './views/FastWriting.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/lesson/:id',
      name: 'fastwriting',
      component: FastWriting
    }
  ]
})
