import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'
// TODO: 按需引入样式？
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(PiniaVuePlugin)

new Vue({
	router,
	pinia: createPinia(),
	render: (h) => h(App)
}).$mount('#app')
