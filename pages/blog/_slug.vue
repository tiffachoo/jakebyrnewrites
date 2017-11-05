<template>
  <div>
    <Navigation></Navigation>

    <div class="hero">
      <h2 class="hero-header">{{ post.fields.title }}</h2>
      <br/>
      <time class="hero-small-text">{{ (new Date(post.fields.publishDate)).toDateString() }}</time>
    </div>

    <section class="container">
      <div class="blog-body">
        <vue-markdown>{{post.fields.body}}</vue-markdown>
      </div>
    </section>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    Navigation,
    VueMarkdown
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .blog-body {
    padding: 0 $space-main;

    @media (min-width: $lg) {
      padding-left: $space-offset-left;
    }

    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 2.25em;
    }
    h3 {
      font-size: 2.125em;
    }
    h4 {
      font-size: 1.75em;
    }
    h5 {
      font-size: 1.5em;
    }

    h1, h2, h3, h4 {
      margin-bottom: 0.125em;
    }

    p {
      margin-bottom: 1.5em;

      @media (min-width: $sm) {
        font-size: 1.125em;
        line-height: 2em;
      }
    }
  }


</style>
