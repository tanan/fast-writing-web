import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue';
import FastWriting from './views/FastWriting.vue';
import CreateWriting from './views/CreateWriting.vue';
import Store from './store';

Vue.use(Router)

const router = new Router({
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
      component: FastWriting,
      meta: { requiresAuth: true }
    },
    {
      path: '/lesson/create',
      name: 'createwriting',
      component: CreateWriting,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('auth: ' + Store.getters['auth/loggedIn'])
    if (!Store.getters['auth/loggedIn']) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
