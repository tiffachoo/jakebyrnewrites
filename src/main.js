// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Construction from './components/Construction'
// import Page from './components/Page'

import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Construction }
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
