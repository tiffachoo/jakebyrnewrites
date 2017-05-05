<template>
	<div id="app">
		<construction></construction>
	</div>
</template>

<script>
import Construction from './components/Construction'

export default {
	name: 'app',
	components: {
		Construction
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
