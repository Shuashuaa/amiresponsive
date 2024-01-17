import { createRouter, createWebHistory } from 'vue-router'

import amIResponsive from '../components/amIResponsive.vue'
import Error from '../components/Error.vue'

const router = new createRouter({
	history: createWebHistory(process.env.BASE_URL),
	mode: 'history',
	routes: [
		{
			path: '/amiresponsive',
			name: 'amiresponsive',
			component: amIResponsive,
			meta: { title: 'Am I Responsive?' },//##
		},
		{
			path: '/:catchAll(.*)',
			name: 'error',
			component: Error,
			meta: { title: "404 | Isekai'd out" },//##
		},
		
	],

});

export default router
