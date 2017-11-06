<template>
  <div class="wrap">
    <Navigation></Navigation>
    <main class="main" role="main">
      <nuxt/>
    </main>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Navigation from '~/components/navigation.vue'
  import Bottom from '~/components/footer.vue'

  export default {
    components: {
      Navigation,
      Bottom
    }
  }
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
    font-weight: 300;
    line-height: $body-line-height;

    > div {
      display: flex;
      flex: 1 1 auto;
      background-color: $white;

      @media (min-width: $md) {
        margin: $body-border-width;
      }
    }
  }

  h2 {
    font-size: 4em;
    line-height: 1.125em;

    @media (max-width: $md - 1) {
      font-size: 3em;
    }
  }
  h3 {
    font-size: 2.5em;
    line-height: 1.125em;

    @media (max-width: $md - 1) {
      font-size: 2em;
    }
  }
  h4 {
    font-size: 2em;
    line-height: 1.25em;

    @media (max-width: $md - 1) {
      font-size: 1.75em;
    }
  }
  h5 {
    font-size: 1.75em;
    line-height: 1.25em;
    font-weight: 700;

    @media (max-width: $md - 1) {
      font-size: 1.25em;
    }
  }
  h6 {
    font-size: 1em;
    line-height: 1.25em;
    font-weight: 700;
  }

  a {
    border-bottom: 1px dotted $link-color;
    text-decoration: none;
    color: $primary-color-tint-1; 
    font-weight: 400;
    transition: 0.2s;

    &:hover {
      border-bottom: 1px solid;
    }
  }

  a.link-fancy {
    position: relative;
    z-index: 1;
    border-bottom: none;
    background-image: linear-gradient(to bottom, transparent 0%, transparent 55%, $link-color 55%, $link-color 90%, transparent 90%);
    background-size: 100% 100%; 
    line-height: 1em;
    transition: 0.25s;

    &:hover {
      border-bottom: none;
      background-size: 100% 140%; 
    }
  }

  .wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 80px 0 0;

    @media (min-width: $lg) {
      padding: 120px 0 0;
    }
  }

  .main {
    flex-grow: 1;
    padding-bottom: 60px;

    @media (min-width: $lg) {
      padding-bottom: 100px;
    }
  }

  .container {
    @extend %main-container;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -$space-gutter;

    &-col-50 {
      padding: 0 $space-gutter;

      @media (min-width: $sm) {
        flex: 0 0 50%;
      }
    }
  }
</style>
