<template>
  <div>
    <Hero title="Contact"></Hero>

    <section class="container">
      <div class="content contact">
        <span class="contact-email">
          <a class="link-fancy" :href="`mailto:${person.fields.email}`">
            {{ person.fields.email }}
          </a>
        </span>
      </div>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Hero from '~/components/hero.vue'

const client = createClient()

export default {
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
    Hero
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .contact {
    &-email {
      font-size: 4em;
      line-height: 1.125em;
      font-style: italic;

      @media (max-width: $md - 1) {
        font-size: 2em;
      }
    }
  }
</style>
