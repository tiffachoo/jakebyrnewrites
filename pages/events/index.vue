<template>
  <div>
    <div class="hero">
      <h2 class="hero-header">See</h2>
    </div>

    <section class="container-fluid">
      <ul class="event-items">
        <li class="event-item" v-for="post in posts">
          <div class="event-item-wrap">
            <div class="item-left">
              <h3>{{post.fields.name}}</h3>
              <span>
                <template v-if="post.fields.type">
                  {{post.fields.type}}
                  @
                </template>
                  {{post.fields.venue}}
              </span>
            </div>
            <div class="item-right">
              <time>{{ (new Date(post.fields.date)).toDateString() }}</time>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="container">
      <h4>Past events</h4>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_EVENT_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  }
}
</script>

<style lang="scss">
  @import "../../assets/scss/variables";

  .event {
    &-items {
    }

    &-item {
      position: relative;
      margin-bottom: $space-main;
      padding-bottom: $space-main;
      @include line-hover(50%);
    }
  }

  .event-item-wrap {
    @extend %main-container;
    padding: 0 $space-main;

    @media (min-width: $lg) {
      padding-left: $space-offset-left;
    }
    @media (min-width: $sm) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
