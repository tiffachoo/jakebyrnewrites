<template>
  <article class="item-block">
    <img 
      class="item-thumbnail"
      :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
      :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      sizes="(min-width: 1024px) 400px, 100vw"
    >
    <h4 class="item-title">
      <nuxt-link 
        class="item-title-link link-fancy"
        :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
        {{ post.fields.title }}
      </nuxt-link>
    </h4>
    <time class="item-date">
      {{ ( new Date(post.fields.publishDate)).toDateString() }}
    </time>
    <p>{{ post.fields.description }}</p>

    <div class="item-tags">
      <nuxt-link
        v-for="tag in post.fields.tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag: tag }}" 
        class="item-tag">
        {{ tag }}
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .item-block {
    margin-bottom: $space-main;
  }

  .item-thumbnail {
    width: 100%;
  }

  .item-date {
    display: block;
    margin-bottom: $space-main-sm;
    font-style: italic;
    color: $primary-color-tint-1;
  }

  .item-title {
    &-link {
      // position: relative;
      // z-index: 1;
      // border-bottom: none;
      color: $primary-color;

      // &:hover {
      //   border-bottom: none;

      //   &::after {
      //     height: $border-width-text + 0.25em;
      //   }
      // }

      // &::after {
      //   content: '';
      //   @include line-decoration($link-color);
      //   transition: 0.25s;
      // }
    }
  }

  .item-tags {
    margin-top: $space-main-sm;
  }

  .item-tag {
    margin-right: 0.5em;
    padding: 0.25em 0.5em;
    border: dotted 1px $link-color;
    background-color: transparent;
    font-size: 0.875em;

    &:hover {
      border: solid 1px $link-color;
      background-color: $link-color;
    }
  }
</style>
