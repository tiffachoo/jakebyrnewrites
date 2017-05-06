<template>
	<nav class="navigation">
		<ul>
			<li v-for="item in items">
			<router-link
				:to="item.link"
				active-class="active">
				{{ item.name }}
			</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'navigation',
	props: ['items']
}
</script>

<style lang="scss" scoped>
.navigation {
	position: fixed;
	z-index: 10;
}
</style>
