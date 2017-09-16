<template>
  <div>
    <Navigation></Navigation>
    
    <div class="page-info wrapper">
      <h2>Works</h2>
    </div>

    <section class="container">
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <h3>{{post.fields.title}}</h3>
          {{post.fields.publisher}}
          <a :href="post.fields.publishedLink" target="_blank">{{post.fields.publishedIn}}</a>
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
