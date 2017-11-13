<template>
  <g :style="{ clipPath, transformOrigin, transform }">
    <use transform="scale(0.78947)" :xlink:href="xlinkHref"/>
  </g>
</template>

<script>
import { Observable, Scheduler } from '../lib/rxjs'
import { EASING } from '../lib/easing'

const randomBetween = (low, high) => Math.floor(Math.random() * (1 + high - low)) + low

export default {
  props: ['clipPath', 'transformOrigin', 'xlinkHref', 'transformFactor'],
  data () {
    return {
      transform: ''
    }
  },
  mounted () {
    const randomInterval$ = Observable.defer(
      () => Observable
        .timer(randomBetween(1000, 5000))
        .mapTo(randomBetween(90, 110))
    ).repeat()

    this.randomTransformSubscription = randomInterval$
      .pairwise()
      .switchMap(([from, to]) => Observable.interval(0, Scheduler.animationFrame)
        .map(tick => EASING.Elastic.easeOut(tick / 100, from, to))
        .take(100)
        .do(value => {
          this.transform = `scale(${this.transformFactor * (value / 50)}) skewX(${this.transformFactor * (value / 100)}deg) skewY(${this.transformFactor * (value / 100)}deg) rotateY(${this.transformFactor * (value / 100)}deg)`
          // this.transform = `scale(${this.transformFactor * (value / 100)}) skewX(${this.transformFactor * value}deg) skewY(${this.transformFactor * value}deg) rotateY(${this.transformFactor / value}deg)`
          // this.transform = `scale(${this.transformFactor * (value / 10)}) skewX(${this.transformFactor * (value * 360)}deg) skewY(${this.transformFactor * (value * 360)}deg) rotateY(${this.transformFactor / (value * 360)}deg)`
          // this.transform = `scale(${this.transformFactor}) skewX(${this.transformFactor / (value / 180)}deg) skewY(${this.transformFactor * (value * 180)}deg) rotateY(${this.transformFactor}deg)`
        })
      ).subscribe()
  },
  beforeDestroy () {
    this.randomTransformSubscription.unsubscribe()
  }
}
</script>
