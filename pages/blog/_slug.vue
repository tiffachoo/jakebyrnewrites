<template>
  <div>
    <Hero :title="post.fields.title">
      <br/>
      <time class="hero-small-text">{{ (new Date(post.fields.publishDate)).toDateString() }}</time>
    </Hero>

    <section class="container">
      <div class="blog-body wysiwyg-wrapper">
        <vue-markdown>{{post.fields.body}}</vue-markdown>
      </div>
    </section>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import Hero from '~/components/hero.vue'

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
    Hero,
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
  }
</style>
