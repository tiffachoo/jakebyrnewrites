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

<style>
* {
	box-sizing: border-box;
}
html, body {
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
body {
	font-family: 'Crimson Text', serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
body:before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background: -webkit-radial-gradient(center ellipse, rgba(255, 255, 255, 0.3) 0%, #ffffff 100%);
	background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, #ffffff 100%);
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
#app {
	width: 100%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	text-align: center;
}
</style>
