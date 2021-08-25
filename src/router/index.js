import {createRouter, createWebHistory} from "vue-router";

const router = createRouter( {
    history: createWebHistory(),
    rotes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/index')
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../views/index')
        }
    ]
})

export default router
