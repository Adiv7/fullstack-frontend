import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import Article from "../views/pages/Article.vue"
import Dashboard from "../views/pages/Dashboard.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/article/:id", component: Article },
    { path: "/dashboard", component: Dashboard },
    // { path: "/:pathMatch(.*)", component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;