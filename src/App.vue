<template>
	<div class="app">
		<navigation :items="navItems"></navigation>
	  <transition name="glitch">
			<router-view></router-view>
		</transition>
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
	overflow: hidden;
}
.app {
	width: 100%;
	height: 100%;
	display: flex;
	text-align: center;
}
// .glitch-enter-active {
// 	animation-name: glitch;
// 	animation-fill-mode: forwards;
// 	animation-duration: 3s;
// }
.glitch-leave-active {
	position: absolute;
	z-index: 100;
	animation-name: glitch;
	// animation-fill-mode: forwards;
	animation-duration: 3s;
}
@keyframes glitch {
	0% {
		opacity: 1;
		transform: skewX(0deg);
	}
	48% {
		transform: skewX(0deg);
	}
	50% {
		transform: skewX(5deg) skewY(48deg);
	}
	51% {
		transform: skewX(0deg) skewY(0deg) scaleX(-1);
	}
	61% {
		opacity: 0.8;
		transform: skewX(5deg) skewY(0deg) scaleX(-1);
	}
	66% {
		opacity: 0.8;
		transform: skewX(5deg) skewY(0deg);
		color: black;
		background-color: transparent;
	}
	67% {
		color: cyan;
		opacity: 1;
		transform: skewX(-5deg) skewY(-8deg);
		background-color: rgba(magenta, 0.2);
	}
	68% {
		color: black;
		transform: skewX(5deg) scaleX(0.9) scaleY(1);
		background-color: transparent;
	}
	80% {
		transform: skewX(5deg) scaleX(1) scaleY(0.6);
	}
	81% {
		color: black;
		transform: skewY(1deg) scaleX(1.5) scaleY(0.2);
	}
	93% {
		color: cyan;
		background-color: transparent;
	}
	95% {
		color: black;
		background-color: magenta;
	}
	98% {
		transform: skewX(-5deg) scaleX(3) scaleY(0.001);
	}
	100% {
		transform: skewX(-20deg) scaleX(5) scaleY(0);
	}
}
</style>
