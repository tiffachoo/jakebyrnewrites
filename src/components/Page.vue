<template>
	<section class="page-section">
		<article>
			<h1>{{ title }}</h1>
			<h2><small>Page ID: {{ id }}</small></h2>
			<p>{{ body }}</p>
		</article>
	</section>
</template>

<script>
const apiUrl = 'https://jsonplaceholder.typicode.com'
const apiRoute = 'posts'

function getPage (pageId) {
	const resourceUrl = [apiUrl, apiRoute, pageId].join('/')
	/* eslint-disable no-undef */
	return fetch(resourceUrl)
		.then(response => {
			if (response.status !== 200) {
				console.warn(`Looks like there was a problem. Status Code: ${response.status}`)
				return
			}
			return response.json()
		})
		.catch(err => {
			console.error('Fetch Error :-S', err)
		})
}

export default {
	name: 'page',
	data () {
		return {
			id: null,
			title: null,
			body: null
		}
	},
	beforeRouteEnter (to, from, next) {
		getPage(to.params.pageId)
			.then(page => {
				next(vm => vm.setData(page))
			})
	},
	beforeRouteUpdate (to, from, next) {
		this.id = null
		this.title = null
		this.body = null
		getPage(to.params.pageId, (page) => {
			this.setData(page)
			next()
		})
	},
	methods: {
		setData ({id, title, body}) {
			Object.assign(this, {id, title, body})
		}
	}
}
</script>

<style scoped>
</style>
