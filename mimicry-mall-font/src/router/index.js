import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home/home.vue'
// auto import router
const requireRouters = require.context('./', false, /\.router.js$/);
const routerMap = requireRouters.keys().map(route => requireRouters(route).default)

const routes = [
  {
    // path: '/',
    // name: 'Home',
    // redirect: '/home',
    // component: Home
  },
  // {
  //   path: '/home',
  //   component: Home
  // },
  ...routerMap,
  {
    path: '',
    component: () => import(/* webpackChunkName: "404" */'../views/404/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
