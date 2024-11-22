import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'virtual:windi.css'

Vue.use(PiniaVuePlugin)

new Vue({
	router,
	pinia: createPinia(),
	render: (h) => h(App)
}).$mount('#app')
