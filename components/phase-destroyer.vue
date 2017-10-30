<template>
  <div v-phase-destroyer>
    <slot></slot>
  </div>
</template>

<script>
  const CAUSE_EVENT = 'event'
  const CAUSE_INTERVAL = 'interval'

  export default {
    props: {
      target: {
        type: String,
        required: true
      },
      cause: {
        type: String,
        default: CAUSE_INTERVAL,
        validator: value => [CAUSE_EVENT, CAUSE_INTERVAL].includes(value)
      },
      effect: {
        type: Object,
        required: true
      }
    },
    mounted () {
      // const targetEls = document.querySelectorAll(this.target)
      if (this.cause === CAUSE_EVENT) {

      } else {
        this.getInterval(time => {
          console.log(time)
        })
      }
    },
    methods: {
      getInterval (action) {
        const timeout = (Math.floor(Math.random() * 5000) + 1000)
        setTimeout(() => {
          action(timeout)
          this.getInterval(action)
        }, timeout)
      },
      runEffect (target, key, value) {
        // const prevStyle = target.style
        // target.style[key] = value
      }
    },
    directives: {
      phaseDestroyer: {
        bind (el, bindings, thing) {
          console.log(el, bindings, thing)
          el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'yellow'
          })
          el.addEventListener('mouseout', () => {
            el.style.backgroundColor = null
          })
        }
      }
    }
  }
</script>
