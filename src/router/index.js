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
		},
		{
			path: "/about",
			name: "about",
            component: loadView ('AboutView'),
		},
        {
			path: "/buttons",
			name: "buttons",
            component: loadView ('ButtonsView'),
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

export default router
