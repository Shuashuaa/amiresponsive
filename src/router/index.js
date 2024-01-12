import { createRouter, createWebHistory } from 'vue-router'

import amIResponsive from '../components/amIResponsive.vue'

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
	],

});

export default router
