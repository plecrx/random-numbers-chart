import { useRandomIntegersStore } from '@/stores/useRandomIntegers.store.ts'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home-page.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            beforeEnter: () =>
                useRandomIntegersStore().searchIntegers({
                    num: 20,
                    min: 1,
                    max: 10,
                    col: 1,
                    base: 2,
                    format: 'plain'
                })
        }
    ]
})

export default router
