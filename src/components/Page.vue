<template>
	<section class="page-section">
		<h1>{{ title }}</h1>
		<p>{{ body }}</p>
	</section>
</template>

<script>
export default {
	name: 'page',
	props: ['title', 'body'],
	data (props) {
		return {
			title: props.title,
			body: props.body
		}
	}
}
</script>

<style scoped>
</style>
