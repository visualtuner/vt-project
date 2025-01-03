import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { nextTick } from 'vue';

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
            meta: { transition: 'slide-fade' },
		},
		{
			path: "/about",
			name: "about",
            component: loadView ('AboutView'),
            meta: { transition: 'slide-fade' },
		},
        {
			path: "/buttons",
			name: "buttons",
            component: loadView ('ButtonsView'),
            meta: { transition: 'slide-up' },
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

function setupRouterTransitions(router) {
    let isBack = false; 

    router.options.history.listen((to, from, info) => {
        isBack = info.direction === 'back';
    });

    router.beforeEach((to, from, next) => {
        // 라우트에 설정된 기본 트랜지션(없으면 slide-fade)
        //const baseTransition = to.meta.transition || 'slide-fade';
        const baseTransition = isBack ? (from.meta.transition || 'slide-fade') : (to.meta.transition || 'slide-fade');
    
        // 뒤로가기 시에는 baseTransition + '-reverse'
        const finalTransitionName = isBack
          ? baseTransition + '-reverse'
          : baseTransition;
    
        //console.log(from.meta.runtimeTransition);
        // from.meta.runtimeTransition = finalTransitionName;
        to.meta.runtimeTransition = finalTransitionName;
    
        next();
      });

    router.afterEach((to, from) => {
        isBack = false;
    });
}

setupRouterTransitions(router);


export default router;
