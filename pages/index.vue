<template>
  <div>
    <Navigation></Navigation>
    
    <div class="home-image">
      <img class="image" :src="person.fields.image.fields.file.url" alt="jakey">
    </div>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'

const client = createClient()

export default {
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
    Navigation
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .home-image {
    position: absolute;
    top: $body-border-width;
    left: $body-border-width;
    width: calc(100% - (#{$body-border-width} * 2));
    height: calc(100% - (#{$body-border-width} * 2));
    overflow: hidden;
  }

</style>
