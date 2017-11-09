<template>
  <svg class="jake" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
      <clipPath v-for="(node, index) in svg" :key="index" :id="`clipPath-${index}`">
        <polygon :points="node.points" style="fill: none"/>
      </clipPath>
      <image id="jake-master" width="1920" height="1368" :xlink:href="src"/>
    </defs>
    <g v-for="(node, index) in svg" :key="index" :style="{
      clipPath: `url(#clipPath-${index})`,
      transformOrigin: node.style.transformOrigin
    }">
      <use transform="scale(0.78947)" xlink:href="#jake-master"/>
    </g>
  </svg>
</template>

<script>
export default {
  directives: {
    shift (el, binding) {
      const id = el.style.clipPath.split('"')[1].split('#')[1]
      const path = document.getElementById(id)
      const rect = path.getBoundingClientRect()
      const center = { x: rect.left - rect.width / 2, y: rect.top - rect.height / 2 }
      const { innerWidth, innerHeight } = window
      const shiftAmount = {
        x: ((center.x / innerWidth) + (binding.value.x)) / 2,
        y: ((center.y / innerHeight) + (binding.value.y)) / 2
      }
      console.log(shiftAmount)
      el.style.transform = `rotateY(${60 * shiftAmount.x}deg) rotateX(${60 * shiftAmount.y}deg) skewX(${shiftAmount.y}deg) skewY(${shiftAmount.x}deg)`
    }
  },
  props: ['src'],
  data () {
    return {
      shiftValue: {
        x: 0,
        y: 0
      },
      svg
    }
  },
  mounted () {
    window.addEventListener('mousemove', this.shift)
  },
  methods: {
    shift ({ clientX, clientY }) {
      const { innerWidth, innerHeight } = window
      const x = clientX / innerWidth
      const y = clientY / innerHeight
      this.shiftValue = { x, y }
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";
  .jake {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 0.5;
  }

</style>
