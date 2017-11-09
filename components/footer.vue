<template>
	<footer class="footer">
		<div class="container">
			&copy; Jake Byrne
		</div>
	</footer>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .footer {
  	display: flex;
  	align-items: center;
  	flex-direction: row-reverse;
		position: relative;
		z-index: 1;
		height: 100px;
		overflow: hidden;
		color: $white;

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			left: 0;
			bottom: -50px;
			height: 100px;
			width: 110%;
			transform: rotate(-3deg);
			background-color: $primary-color;
		}

		.container {
	    padding: 0 $space-main;
	    align-self: flex-end;
		}
  }
</style>
