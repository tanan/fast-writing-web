import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import FastWriting from './views/FastWriting.vue';
import UserFastWriting from './views/UserFastWriting.vue';
import CreateLesson from './views/CreateLesson.vue';
import EditLesson from './views/EditLesson.vue';
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
      path: '/lesson',
      name: 'LessonList',
      component: LessonList,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/lesson/create',
      name: 'createLesson',
      component: CreateLesson,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/lesson/edit/:id',
      name: 'editLesson',
      component: EditLesson,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/lesson/:id',
      name: 'userFastWriting',
      component: UserFastWriting,
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
