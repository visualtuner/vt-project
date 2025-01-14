import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import ButtonsView from '../views/ButtonsView.vue'
import MoreView from '../views/MoreView.vue'

function loadView (view) {
    return () => import(`@/views/${view}.vue`)
}

const router = createRouter({
	//history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
            meta: { transition: 'no-transition' },
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
            meta: { transition: 'no-transition' },
		},
        {
			path: "/components",
			name: "components",
			component: ComponentsView,
            meta: { transition: 'no-transition' },
            children: [
                /*{
                    path: "",
                    component: ComponentsView,
                    meta: { transition: 'no-transition' },
                },*/
                {
                    path: "buttons",
                    name: "buttons",
                    component: ButtonsView,
                    meta: { transition: 'slide-up' },
                },
            ],
		},
        {
			path: "/more",
			name: "more",
            component: MoreView,
            meta: { transition: 'no-transition' },
		},
        /*{
			path: "/components/buttons",
			name: "buttons",
			component: ButtonsView,
            meta: { transition: 'slide-up' },
		},*/
        /*{
			path: "/more",
			name: "more",
            component: loadView ('MoreView'),
            meta: { transition: 'slide-up' },
		},*/
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

function setupRouterTransitions(router) {
    let isBack = false; 

    router.options.history.listen((to, from, info) => {
        isBack = info.direction === 'back';
    });

    router.beforeEach((to, from, next) => {
        const baseTransition = isBack ? (from.meta.transition || 'slide-fade') : (to.meta.transition || 'slide-fade');
        const finalTransitionName = isBack ? baseTransition + '-reverse' : baseTransition;

        to.meta.runtimeTransition = finalTransitionName;
    
        next();
      });

    router.afterEach((to, from) => {
        isBack = false;
    });
}

setupRouterTransitions(router);


export default router;
