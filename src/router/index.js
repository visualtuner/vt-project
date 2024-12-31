import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function loadView (view) {
    return () => import(`@/views/${view}.vue`)
}

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
            meta: { transition: 'slide-left' },
		},
		{
			path: "/about",
			name: "about",
            component: loadView ('AboutView'),
            meta: { transition: 'slide-left' },
		},
        {
			path: "/buttons",
			name: "buttons",
            component: loadView ('ButtonsView'),
            meta: { transition: 'slide-left' },
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
