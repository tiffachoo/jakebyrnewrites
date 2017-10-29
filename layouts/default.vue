<template>
  <div class="wrap">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  // import Greeting from '~/components/greeting.vue'

  // export default {
  //   components: {
  //     Greeting
  //   }
  // }
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;
    background-color: $body-font-color;
    font-family: $body-font-family;
    font-size: $body-font-size;
    line-height: $body-line-height;

    > div {
      flex: 1 0 auto;
      margin: $body-border-width;
      background-color: $white;
    }
  }

  h2 {
    font-size: 4em;
    line-height: 1.25em;
  }
  h3 {
    font-size: 2.5em;
    line-height: 1.25em;
  }

  a {
    border-bottom: 1px dotted;
    text-decoration: none;
    color: $link-color; 

    &:hover {
      border-bottom: 1px solid;
    }
  }

  .wrap {
    padding: 120px 0 100px;
  }

  .hero {
    @extend %main-container;
    // margin-bottom: $space-main-lg;
  }

</style>
