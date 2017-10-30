<template>
  <div>
    <Navigation></Navigation>
    
    <div class="hero">
      <h2 class="hero-header">Works</h2>
    </div>

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
import Navigation from '~/components/navigation.vue'

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
    Navigation
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
      
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40%;
      }
      &::before {
        height: 1px;
        background-color: $primary-color-tint-2;
      }
      &::after {
        height: 1px;
        transform: scaleX(0);
        transform-origin: left center;
        background-color: $primary-color;
        transition: 0.4s ease-in;
      }

      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }

  .item {
    &-italic {
      margin-right: $space-main-sm;
    }
  }

  .work-item-wrap {
    @extend %main-container;
    padding-left: 30%;
  }
</style>
