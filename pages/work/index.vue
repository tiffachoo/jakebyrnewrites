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
          <span
            v-if="post.fields.teaser"
            class="item-hover-text">
            {{post.fields.teaser}}
          </span>
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
  // transition: 'glitch',
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
      z-index: 1;
      margin-bottom: $space-main;
      padding-bottom: $space-main;
      @include line-hover(40%);


      @media (min-width: $sm) {
        &:hover {
          .item-hover-text {
            color: $secondary-color;
            opacity: 1;
            transform: scale(1) skewY(0deg);
          }
        }
      }
    }
  }

  .item {
    &-italic {
      margin-right: $space-main-sm;
    }

    &-hover-text {
      @media (min-width: $sm) {
        position: fixed;
        z-index: -1;
        top: $space-offset-top;
        left: 50%;
        width: 40%;
        font-size: 4rem;
        line-height: 1.35em;
        color: $tertiary-color;
        opacity: 0;
        transition: opacity 0.5s 0.2s, transform 0.1s 0.2s, color 0.1s 0.2s;
        transform-origin: 50% 50%;
        transform: scale(0.5) skewY(180deg);
      }

      @media (max-width: $md - 1) {
        display: none;
      }
    }
  }

  .work-item-wrap {
    @extend %main-container;
    position: relative;
    z-index: 1000;
    padding: 0 $space-main;

    @media (min-width: $lg) {
      padding-left: $space-offset-left;
    };
  }
</style>
