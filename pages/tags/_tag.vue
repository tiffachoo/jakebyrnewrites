<template>
  <div>
    <Navigation></Navigation>

    <div class="hero">
      <h2 class="hero-header">#{{ tag }}</h2>
      <br/>
      <span class="hero-small-text">{{ posts.length }} blog entr{{ pluralizeY }} tagged</span>
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
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  computed: {
    pluralizeY () {
      return (this.posts.length > 1) ? 'ies' : 'y'
    }
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
      padding: 0 $space-main;

      @media (min-width: $lg) {
        padding-left: $space-offset-left;
      }
    }

    &-item {
      
    }
  }
</style>
