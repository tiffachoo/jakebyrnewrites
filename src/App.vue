<template>
	<div id="app">
		<navigation :items="navItems"></navigation>
		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from './shared-components/Navigation'

export default {
	name: 'app',
	data () {
		return {
			navItems: [{
				name: 'WHO',
				link: 'bio'
			}, {
				name: 'WORKS',
				link: 'works'
			}]
		}
	},
	components: {
		Navigation
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}
html, body {
	width: 100%;
	height: 100%;
	display: flex;
}
body {
	font-family: 'Cormorant Garamond', Garamond, serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#app {
	width: 100%;
	height: 100%;
	display: flex;
	text-align: center;
}
</style>
