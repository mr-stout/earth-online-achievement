import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: "Vote",
        component: () => import("../components/Vote.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;