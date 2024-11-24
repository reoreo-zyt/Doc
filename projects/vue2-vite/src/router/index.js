import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		}
		// TODO: 把 techui 迁移过来
		// {
		// 	path: '/dashboardA',
		// 	name: 'dashboardA',
		// 	component: () => import('@/views/dashboard/dashboard1080pA/index.vue')
		// }
	]
})

export default router
