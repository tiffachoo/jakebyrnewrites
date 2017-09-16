<template>
  <div>
    <Navigation></Navigation>
    
    <div class="hero">
      <h2>See</h2>
    </div>

    <section class="container">
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <h3>{{post.fields.name}}</h3>
          <span>{{post.fields.date}}</span>
          {{post.fields.venue}}
          {{post.fields.location}}
          {{post.fields.type}}
          {{post.fields.cost}}
          {{post.fields.media}}
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
      'content_type': env.CTF_EVENT_TYPE_ID,
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
