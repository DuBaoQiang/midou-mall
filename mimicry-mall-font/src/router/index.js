import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

// auto import router
const requireRouters = require.context('./', false, /\.router.js$/);
const routerMap = requireRouters.keys().map(route => requireRouters(route).default)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    ...routerMap
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router