import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import FastWriting from './views/FastWriting.vue';
import CreateWriting from './views/CreateWriting.vue';
import LessonList from './views/LessonList.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: LessonList,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
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
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
