import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/home.vue'
// auto import router
const requireRouters = require.context('./', false, /\.router.js$/);
const routerMap = requireRouters.keys().map(route => requireRouters(route).default)

const routes = [{
        path: '',
        redirect: '/home',
        // component: Home
    },
    // {
    //     path: '/home',
    //     // redirect: '/mine'
    //     component: Home
    // },
    ...routerMap,
    {
        path: '',
        component: () =>
            import ( /* webpackChunkName: "404" */ '../views/404/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path.endsWith('')) next()
    else next({ path: to.path + '/', query: to.query, hash: to.hash })
})

export default router
