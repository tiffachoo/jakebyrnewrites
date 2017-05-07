// Browser polyfills
import 'isomorphic-fetch'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import { routes } from './router-config'
import { apiUrl, pagesRoute } from './constants'

const Page = resolve => require(['./components/Page'], resolve)

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history'
})

const resourceUrl = [apiUrl, pagesRoute].join('/')

/* eslint-disable no-undef */
fetch(resourceUrl)
	.then(response => {
		if (response.status !== 200) {
			console.warn(`Looks like there was a problem. Status Code: ${response.status}`)
			return
		}
		return response.json()
	})
	.then(data => {
		const routes = data.map(page => {
			return {
				name: page.link,
				path: `/${page.link}`,
				component: Page,
				props: {
					page
				}
			}
		})
		console.log(routes)
		router.addRoutes(routes)
	})
	.catch(err => {
		console.error(`Fetch Error :-S\n${err}`)
	})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
