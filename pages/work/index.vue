<template>
  <div>
    <Hero title="Works"></Hero>

    <section class="container-fluid">
      <ul class="work-items">
        <li class="work-item" v-for="post in posts">
          <div class="work-item-wrap">
            <h3>{{post.fields.title}}</h3>
            <em 
              v-if="post.fields.publisher"
              class="item-italic">
              {{post.fields.publisher}}
            </em>
            <a
              v-if="post.fields.publishedLink" 
              class="link-fancy item-link"
              target="_blank"
              :href="post.fields.publishedLink">
              {{post.fields.publishedIn}}
            </a>
          </div>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Hero from '~/components/hero.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_WORK_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  components: {
    Hero
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .work {
    &-items {

    }

    &-item {
      position: relative;
      margin-bottom: $space-main;
      padding-bottom: $space-main;
      
      @include line-hover(40%);
    }
  }

  .item {
    &-italic {
      margin-right: $space-main-sm;
    }
  }

  .work-item-wrap {
    @extend %main-container;
    padding: 0 $space-main;
    
    @media (min-width: $lg) {
      padding-left: $space-offset-left;
    };
  }
</style>
