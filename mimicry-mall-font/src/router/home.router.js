import Layout from '../layout/Layout.vue'
export default {
  path: '/home',
  name: 'Home',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "Home" */'../views/Home/home.vue')
    }
  ]
}
