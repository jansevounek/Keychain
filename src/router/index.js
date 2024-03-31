import { createRouter, createWebHistory } from "vue-router"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/signup", component: () => import("../views/NewSignUp.vue") },
        { path: "/", component: () => import("../views/HomePage.vue") },
        { path: "/login", component: () => import("../views/NewLogin.vue") },
        {
            path: "/home",
            component: () => import("../views/Home.vue"),
            meta: {
                requiresAuth: true,
            }
        },
    ]
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser) {
            next()
        } else {
            alert("You shall not pass")
            next("/")
        }
    } else {
        next()
    }
})

export default router