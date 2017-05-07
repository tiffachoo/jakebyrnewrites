<template>
	<section class="page-section">
		<div v-if="loading" class="loading">
			Loading...
		</div>
		<article v-if="page" class="page-content">
			<h1>{{ page.title }}</h1>
			<h2><small>Page ID: {{ page.id }}</small></h2>
			<p>{{ page.body }}</p>
		</article>
		<div v-if="error" class="error">
			{{ error }}
		</div>
	</section>
</template>

<script>
const apiUrl = 'http://localhost:3000/api' // https://jsonplaceholder.typicode.com
const apiRoute = 'pages' // 'posts'

// function getPage (pageId) {
// 	const resourceUrl = [apiUrl, apiRoute, pageId].join('/')
// 	/* eslint-disable no-undef */
// 	return fetch(resourceUrl)
// 		.then(response => {
// 			if (response.status !== 200) {
// 				console.warn(`Looks like there was a problem. Status Code: ${response.status}`)
// 				return
// 			}
// 			return response.json()
// 		})
// 		.catch(err => {
// 			console.error('Fetch Error :-S', err)
// 		})
// }

export default {
	name: 'page',
	data () {
		return {
			loading: false,
			page: null,
			error: null
		}
	},
	created () {
		this.getPage()
	},
	// beforeRouteEnter (to, from, next) {
	// 	getPage(to.params.pageId)
	// 		.then(page => {
	// 			next(vm => vm.setData(page))
	// 		})
	// },
	// beforeRouteUpdate (to, from, next) {
	// 	this.id = null
	// 	this.title = null
	// 	this.body = null
	// 	getPage(to.params.pageId).then(page => {
	// 		this.setData(page)
	// 		next()
	// 	})
	// },
	watch: {
		'$route': 'getPage'
	},
	methods: {
		getPage () {
			this.error = this.page = null
			this.loading = true
			const resourceUrl = [apiUrl, apiRoute, this.$route.params.pageId].join('/')
			/* eslint-disable no-undef */
			return fetch(resourceUrl)
				.then(response => {
					this.loading = false
					if (response.status !== 200) {
						this.error = `Looks like there was a problem. Status Code: ${response.status}`
						return
					}
					return response.json()
				})
				.then(data => {
					this.page = data
				})
				.catch(err => {
					this.error = `Fetch Error :-S\n${err}`
				})
		}// ,
		// setData ({id, title, body}) {
		// 	Object.assign(this, {id, title, body})
		// }
	}
}
</script>

<style lang="scss" scoped>
.page-section {
	width: 100%;
	height: 100%;
	display: flex;
	padding: 2rem;
	background: #f7f6e1;
	align-items: center;
	justify-content: center;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, #ffffff 100%);
		display: flex;
	}
}
</style>
