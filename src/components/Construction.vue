<template>
	<div class="construction">
		<h1 data-text="Nunc jake me posito byrne velamine writes,
si poteris narrare, fuck!">{{ text }}</h1>
	</div>
</template>

<script>
export default {
	name: 'construction',
	data () {
		return {
			text: 'Nunc tibi me posito visam velamine narres, si poteris narrare, licet!'
		}
	}
}
</script>

<style lang="scss" scoped>
.construction {
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
@-webkit-keyframes h1-anim-1 {
	0% {
		clip: rect(25px, 600px, 22px, 0);
	}
	5.88235% {
		clip: rect(40px, 600px, 20px, 0);
	}
	11.76471% {
		clip: rect(8px, 600px, 68px, 0);
	}
	17.64706% {
		clip: rect(97px, 600px, 75px, 0);
	}
	23.52941% {
		clip: rect(75px, 600px, 101px, 0);
	}
	29.41176% {
		clip: rect(46px, 600px, 72px, 0);
	}
	35.29412% {
		clip: rect(111px, 600px, 51px, 0);
	}
	41.17647% {
		clip: rect(43px, 600px, 70px, 0);
	}
	47.05882% {
		clip: rect(20px, 600px, 21px, 0);
	}
	52.94118% {
		clip: rect(114px, 600px, 1px, 0);
	}
	58.82353% {
		clip: rect(23px, 600px, 19px, 0);
	}
	64.70588% {
		clip: rect(61px, 600px, 68px, 0);
	}
	70.58824% {
		clip: rect(7px, 600px, 107px, 0);
	}
	76.47059% {
		clip: rect(100px, 600px, 59px, 0);
	}
	82.35294% {
		clip: rect(95px, 600px, 102px, 0);
	}
	88.23529% {
		clip: rect(58px, 600px, 92px, 0);
	}
	94.11765% {
		clip: rect(37px, 600px, 7px, 0);
	}
	100% {
		clip: rect(108px, 600px, 5px, 0);
	}
}
@keyframes h1-anim-1 {
	0% {
		clip: rect(25px, 600px, 22px, 0);
	}
	5.88235% {
		clip: rect(40px, 600px, 20px, 0);
	}
	11.76471% {
		clip: rect(8px, 600px, 68px, 0);
	}
	17.64706% {
		clip: rect(97px, 600px, 75px, 0);
	}
	23.52941% {
		clip: rect(75px, 600px, 101px, 0);
	}
	29.41176% {
		clip: rect(46px, 600px, 72px, 0);
	}
	35.29412% {
		clip: rect(111px, 600px, 51px, 0);
	}
	41.17647% {
		clip: rect(43px, 600px, 70px, 0);
	}
	47.05882% {
		clip: rect(20px, 600px, 21px, 0);
	}
	52.94118% {
		clip: rect(114px, 600px, 1px, 0);
	}
	58.82353% {
		clip: rect(23px, 600px, 19px, 0);
	}
	64.70588% {
		clip: rect(61px, 600px, 68px, 0);
	}
	70.58824% {
		clip: rect(7px, 600px, 107px, 0);
	}
	76.47059% {
		clip: rect(100px, 600px, 59px, 0);
	}
	82.35294% {
		clip: rect(95px, 600px, 102px, 0);
	}
	88.23529% {
		clip: rect(58px, 600px, 92px, 0);
	}
	94.11765% {
		clip: rect(37px, 600px, 7px, 0);
	}
	100% {
		clip: rect(108px, 600px, 5px, 0);
	}
}
@-webkit-keyframes h1-anim-2 {
	0% {
		clip: rect(55px, 600px, 97px, 0);
	}
	5.88235% {
		clip: rect(41px, 600px, 30px, 0);
	}
	11.76471% {
		clip: rect(80px, 600px, 73px, 0);
	}
	17.64706% {
		clip: rect(66px, 600px, 87px, 0);
	}
	23.52941% {
		clip: rect(77px, 600px, 38px, 0);
	}
	29.41176% {
		clip: rect(62px, 600px, 32px, 0);
	}
	35.29412% {
		clip: rect(96px, 600px, 1px, 0);
	}
	41.17647% {
		clip: rect(65px, 600px, 102px, 0);
	}
	47.05882% {
		clip: rect(71px, 600px, 60px, 0);
	}
	52.94118% {
		clip: rect(42px, 600px, 11px, 0);
	}
	58.82353% {
		clip: rect(85px, 600px, 86px, 0);
	}
	64.70588% {
		clip: rect(61px, 600px, 28px, 0);
	}
	70.58824% {
		clip: rect(21px, 600px, 108px, 0);
	}
	76.47059% {
		clip: rect(104px, 600px, 23px, 0);
	}
	82.35294% {
		clip: rect(37px, 600px, 97px, 0);
	}
	88.23529% {
		clip: rect(21px, 600px, 52px, 0);
	}
	94.11765% {
		clip: rect(79px, 600px, 36px, 0);
	}
	100% {
		clip: rect(14px, 600px, 96px, 0);
	}
}
@keyframes h1-anim-2 {
	0% {
		clip: rect(55px, 600px, 97px, 0);
	}
	5.88235% {
		clip: rect(41px, 600px, 30px, 0);
	}
	11.76471% {
		clip: rect(80px, 600px, 73px, 0);
	}
	17.64706% {
		clip: rect(66px, 600px, 87px, 0);
	}
	23.52941% {
		clip: rect(77px, 600px, 38px, 0);
	}
	29.41176% {
		clip: rect(62px, 600px, 32px, 0);
	}
	35.29412% {
		clip: rect(96px, 600px, 1px, 0);
	}
	41.17647% {
		clip: rect(65px, 600px, 102px, 0);
	}
	47.05882% {
		clip: rect(71px, 600px, 60px, 0);
	}
	52.94118% {
		clip: rect(42px, 600px, 11px, 0);
	}
	58.82353% {
		clip: rect(85px, 600px, 86px, 0);
	}
	64.70588% {
		clip: rect(61px, 600px, 28px, 0);
	}
	70.58824% {
		clip: rect(21px, 600px, 108px, 0);
	}
	76.47059% {
		clip: rect(104px, 600px, 23px, 0);
	}
	82.35294% {
		clip: rect(37px, 600px, 97px, 0);
	}
	88.23529% {
		clip: rect(21px, 600px, 52px, 0);
	}
	94.11765% {
		clip: rect(79px, 600px, 36px, 0);
	}
	100% {
		clip: rect(14px, 600px, 96px, 0);
	}
}
h1 {
	position: relative;
	max-width: 600px;
	line-height: 1.35;
	font-size: 2.25rem;
	color: white;
	font-style: italic;
	mix-blend-mode: exclusion;
	&:before, &:after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background: black;
		clip: rect(0, 0, 0, 0);
	}
	&:after {
		left: 2px;
		text-shadow: -1px 0 red;
		animation: h1-anim-1 2s infinite linear alternate-reverse;
	}
	&:before {
		left: -2px;
		text-shadow: 2px 0 blue;
		animation: h1-anim-2 3s infinite linear alternate-reverse;
	}
}
</style>
