<template>
  <div>
    <Hero title="Blog"></Hero>

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
import Hero from '~/components/hero.vue'
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
    Hero
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .blog {
    &-items {
      padding: 0 $space-main;

      @media (min-width: $lg) {
        padding-left: $space-offset-left;
      }
    }

    &-item {
      
    }
  }
</style>
