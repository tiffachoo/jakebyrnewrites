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
    font-weight: 300;
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
  h4 {
    font-size: 2em;
    line-height: 1.25em;
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

    &:hover {
      border-color: transparent;

      &::after {
        transform: scaleY(1);
      }
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: $border-width-text-offset;
      left: 0;
      width: 100%;
      height: $border-width-text;
      transform: scaleY(0);
      transform-origin: bottom center;
      background-color: $link-color;
      transition: 0.25s;
    }
  }

  .wrap {
    padding: 120px 0 100px;
  }

  .container {
    @extend %main-container;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -$space-gutter;

    &-col-50 {
      flex: 0 0 50%;
      padding: 0 $space-gutter;
    }
  }

  .hero {
    @extend %main-container;

    &-header { 
      display: inline-block;
      position: relative;
      z-index: 1;
      font-weight: 700;

      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        bottom: $border-width-text-offset;
        left: 0;
        width: calc(100% + 0.75em);
        height: $border-width-text;
        background-color: $tertiary-color;
      }
    }

    &-spaced {
      margin-bottom: $space-main-lg;
    }
  }

</style>
