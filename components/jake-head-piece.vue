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
        .timer(randomBetween(200, 3000))
        .mapTo(randomBetween(95, 105))
    ).repeat()

    this.randomTransformSubscription = randomInterval$
      .pairwise()
      .flatMap(([from, to]) => Observable.interval(0, Scheduler.animationFrame)
        .map(tick => EASING.Elastic(tick / 100, from, to) * this.transformFactor)
        .take(100)
        .do(factor => {
          this.transform = `scale(${factor / 100}) skewX(${(factor / 100) * 5}deg) rotateY(${(factor / 100) * 10}deg)`
        })
      ).subscribe()
  },
  beforeDestroy () {
    this.randomTransformSubscription.unsubscribe()
  }
}
</script>
