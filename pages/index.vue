<template>
  <div>
    <div class="home-image">
      <PhaseDestroyer target=".jake-layer" cause="interval">
        <JakeHead :src="person.fields.image.fields.file.url"></JakeHead>
      </PhaseDestroyer>
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import JakeHead from '~/components/jake-head.vue'
import PhaseDestroyer from '~/components/phase-destroyer.vue'

const client = createClient()

export default {
  transition: 'glitch',
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    Navigation,
    JakeHead,
    PhaseDestroyer
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .home-image {
    position: absolute;
    top: $body-border-width;
    left: $body-border-width;
    width: 50%;
    height: calc(100% - (#{$body-border-width} * 2));
    overflow: hidden;
    .image {
      max-height: 100%;
    }
    &:after {
      pointer-events: none;
      content: '';
      background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
      width: 50%;
      position: absolute;
      display: block;
      height: 100%;
      right: 0;
      top: 0;
    }
  }

</style>
