<template>
  <div class="home-image">
    <!-- <PhaseDestroyer target=".jake-layer" cause="interval"> -->
      <JakeHead :src="person.fields.image.fields.file.url" :fuckery="true"></JakeHead>
    <!-- </PhaseDestroyer> -->
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import JakeHead from '~/components/jake-head.vue'
import PhaseDestroyer from '~/components/phase-destroyer.vue'

const client = createClient()

export default {
  // transition: 'glitch',
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0]
      }
    }).catch(console.error)
  },
  components: {
    JakeHead,
    PhaseDestroyer
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  .home-image {
    background-image: url(https://i.imgur.com/iLYOX5q.gif);
    background-size: cover;
    mix-blend-mode: exclusion;
    position: absolute;
    top: $body-border-width;
    left: $body-border-width;
    width: calc(100% - (#{$body-border-width} * 2));
    height: calc(100% - (#{$body-border-width} * 2));
    overflow: hidden;
    svg {
      width: 50%;
      opacity: 1;
      transform: scaleY(-1);
    }
  }

</style>
