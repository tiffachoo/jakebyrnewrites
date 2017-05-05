<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
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
