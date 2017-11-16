<template>
  <g :style="{ clipPath, transformOrigin, transform, mixBlendMode }">
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
      transform: '',
      mixBlendMode: 'overlay'
    }
  },
  mounted () {
    let randomParameter = 0

    const randomInterval$ = Observable.defer(
      () => Observable
        .timer(randomBetween(1000, 5000))
        .mapTo(randomBetween(90, 110))
    ).repeat().share()

    const randomParameter$ = randomInterval$
      .switchMap(() => Observable.of(randomBetween(0, 5)))
      .do(value => {
        randomParameter = value
      })

    const randomTransform$ = randomInterval$
      .pairwise()
      .switchMap(([from, to]) => Observable.interval(0, Scheduler.animationFrame)
        .map(tick => EASING.Elastic.easeOut(tick / 100, from, to))
        .take(100)
        .do(value => {
          switch (randomParameter) {
            case 0:
            case 1:
            case 2:
            case 4:
              this.transform = `scale(${this.transformFactor * (value / 50)}) skewX(${this.transformFactor * (value / 100)}deg) skewY(${this.transformFactor * (value / 100)}deg) rotateY(${this.transformFactor * (value / 100)}deg)`
              break
            case 5:
              this.transform = `scale(${this.transformFactor * (value / 100)}) skewX(${this.transformFactor * value}deg) skewY(${this.transformFactor * value}deg) rotateY(${this.transformFactor / value}deg)`
              break
            case 6:
              this.transform = `scale(${this.transformFactor * (value / 10)}) skewX(${this.transformFactor * (value * 360)}deg) skewY(${this.transformFactor * (value * 360)}deg) rotateY(${this.transformFactor / (value * 360)}deg)`
              break
            case 7:
              this.transform = `scale(${this.transformFactor}) skewX(${this.transformFactor / (value / 180)}deg) skewY(${this.transformFactor * (value * 180)}deg) rotateY(${this.transformFactor}deg)`
              break
          }
        })
      )

    const randomBlend$ = randomInterval$
      .do(() => {
        switch (randomParameter) {
          case 0:
          case 1:
          case 2:
          case 4:
            this.mixBlendMode = 'overlay'
            break
          case 5:
            this.mixBlendMode = 'exclusion'
            break
          case 6:
            this.mixBlendMode = 'color-burn'
            break
          case 7:
            this.mixBlendMode = 'hard-light'
            break
        }
      })

    this.randomSubscription = Observable.merge(randomParameter$, randomTransform$, randomBlend$).subscribe()
  },
  beforeDestroy () {
    this.randomSubscription.unsubscribe()
  }
}
</script>
