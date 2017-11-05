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

    &:hover {
      border-color: transparent;

      &::after {
        transform: scaleY(1);
      }
    }

    &::after {
      content: '';
      @include line-decoration($link-color);
      transform: scaleY(0);
      transform-origin: bottom center;
      transition: 0.25s;
    }
  }

  .wrap {
    padding: 80px 0 60px;

    @media (min-width: $lg) {
      padding: 120px 0 100px;
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

  .hero {
    @extend %main-container;

    @media (min-width: $lg) {
      position: fixed;
      z-index: 2;
      left: $body-border-width + $space-main;
      max-width: calc(#{$space-offset-left} - #{$space-gutter});
    }

    @media (max-width: $lg - 1) {
      padding: 0 $space-main;
      margin-bottom: $space-main;
    }

    &-header { 
      display: inline;
      position: relative;
      z-index: 1;
      font-weight: 700;

      &::after {
        content: '';
        @include line-decoration($tertiary-color);
        left: -$space-main;
      }
    }
  }

</style>
