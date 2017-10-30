<template>
  <div>
    <Navigation></Navigation>

    <div class="hero hero-spaced">
      <h2 class="hero-header">Blog</h2>
    </div>

    <section class="container">
      <ul class="grid blog-items">
        <li class="grid-col-50 blog-item" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    ArticlePreview,
    Navigation
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .blog {
    &-items {
    }

    &-item {
      
    }
  }
</style>
