<template>
  <div>
    <Navigation></Navigation>
    
    <div class="hero">
      <h2>Works</h2>
    </div>

    <section class="container">
      <ul class="list-items">
        <li class="list-item" v-for="post in posts">
          <div class="item-wrap">
            <h3>{{post.fields.title}}</h3>
            <em 
              v-if="post.fields.publisher"
              class="item-italic">
              {{post.fields.publisher}}
            </em>
            <a
              v-if="post.fields.publishedLink" 
              class="item-link"
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
