<template>
  <svg class="jake" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
      <clipPath v-for="(node, index) in svg" :key="index" :id="`clipPath-${index}`">
        <polygon :points="node.points" style="fill: none"/>
      </clipPath>
      <image id="jake-master" width="1920" height="1368" :xlink:href="src"/>
    </defs>
    <JakeHeadPiece
      v-for="(node, index) in svg" :key="index"
      :clipPath="`url(#clipPath-${index})`"
      :transformOrigin="node.style.transformOrigin"
      :transformFactor="transformFactor"
      xlinkHref="#jake-master">
    </JakeHeadPiece>
  </svg>
</template>

<script>
import JakeHeadPiece from './jake-head-piece.vue'
import * as svg from './jake-head-svg.json'

import { Observable } from '../lib/rxjs'

export default {
  props: ['src'],
  data () {
    return {
      transformFactor: 1,
      svg
    }
  },
  mounted (el) {
    const mouseMove$ = Observable.fromEvent(window, 'mousemove')
    const touchMove$ = Observable.fromEvent(window, 'touchmove')
    this.cursorMoveSubscription = Observable.merge(mouseMove$, touchMove$)
      .map(({ clientX: x, clientY: y }) => ({ x, y }))
      .subscribe(this.transform)
  },
  beforeDestroy () {
    this.cursorMoveSubscription.unsubscribe()
  },
  methods: {
    transform ({ x: mouseX, y: mouseY }) {
      const { innerWidth, innerHeight } = window
      const jakeCenter = { x: innerWidth / 4, y: innerHeight / 2 }
      const x = (jakeCenter.x > mouseX ? jakeCenter.x - mouseX : mouseX - jakeCenter.x) / jakeCenter.x
      const y = (jakeCenter.y > mouseY ? jakeCenter.y - mouseY : mouseY - jakeCenter.y) / jakeCenter.y
      this.transformFactor = 1 - ((x + y) / 2)
    }
  },
  components: {
    JakeHeadPiece
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
