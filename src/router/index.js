import { createRouter, createWebHistory } from "vue-router"

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routers: [
        {
            path: './home',
            name: 'Home',
            component: resolve => require(['../views/Home.vue'], resolve)
        },
        {
            path: '/me',
            name: 'Me',
            component: resolve => require(['../views/Me.vue'], resolve)
        }
    ]
})
export default router