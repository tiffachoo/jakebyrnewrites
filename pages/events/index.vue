<template>
  <div>
    <Hero title="See"></Hero>

    <section class="container-fluid event-upcoming">
      <ul class="event-items">
        <li 
          v-for="post in posts" 
          v-if="!post.past" 
          class="event-item">
          <div class="event-item-wrap">
            <div class="item-left">
              <h3 class="event-title">{{post.fields.name}}</h3>
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
      <div class="content">
        <div class="event-past">
          <h4 class="event-header">Past events</h4>
          <ul class="event-items">
            <li 
              v-for="post in posts" 
              v-if="post.past" 
              class="event-item">
              <div class="event-item-wrap">
                <div class="item-left">
                  <span class="event-title">{{post.fields.name}}</span><br>
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
        </div>
      </div>
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
      'content_type': env.CTF_EVENT_TYPE_ID,
      order: '-fields.date'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  },
  created () {
    this.posts.forEach(post => {
      if (new Date(post.fields.date) < new Date()) {
        post.past = true
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

  .event-upcoming {
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
    }
  }

  .event-past {
    position: relative;
    margin-top: $space-main-lg;
    padding-top: $space-main;
    background-color: $tertiary-color;

    .event {
      &-header {
        position: absolute;
        top: -20px;
      }

      &-item {
        margin-bottom: $space-main-sm;
        padding-bottom: $space-main-sm;
        border-bottom: solid 1px $white;
      }

      &-title {
        font-weight: 700;
      }
    }
  }

  .event-item-wrap {
    @media (min-width: $sm) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-right {
        margin-left: $space-main-sm
      }
    }
  }
</style>
