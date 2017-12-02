<template>
  <div class="wrap">
    <Navigation :inverted="($route.name === 'mind')"></Navigation>
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

  .intro {
    font-size: 1.25rem;
    line-height: 1.875em;
  }

  .wysiwyg-wrapper {
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 2.25em;
    }
    h3 {
      font-size: 2.125em;
    }
    h4 {
      font-size: 1.75em;
    }
    h5 {
      font-size: 1.5em;
    }

    h1, h2, h3, h4 {
      margin-bottom: 0.125em;
    }

    p {
      margin-bottom: 1.5em;

      @media (min-width: $sm) {
        font-size: 1.125em;
        line-height: 2em;
      }
    }
  }

  .wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 80px 0 0;

    @media (min-width: $lg) {
      padding: $space-offset-top 0 0;
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

  .content {
    padding: 0 $space-main;

    @media (min-width: $lg) {
      padding-left: $space-offset-left;
    }
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

  .glitch {
    &-leave-active {
      animation: glitch 2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  @keyframes glitch {
    0% {
      opacity: 1;
      transform: skewX(0deg);
    }
    48% {
      transform: skewX(0deg);
    }
    50% {
      transform: skewX(5deg) skewY(48deg);
    }
    51% {
      transform: skewX(0deg) skewY(0deg) scaleX(-1);
    }
    61% {
      opacity: 0.8;
      transform: skewX(5deg) skewY(0deg) scaleX(-1);
    }
    66% {
      opacity: 0.8;
      transform: skewX(5deg) skewY(0deg);
      color: black;
      background-color: transparent;
    }
    67% {
      color: cyan;
      opacity: 1;
      transform: skewX(-5deg) skewY(-8deg);
      background-color: rgba(magenta, 0.2);
    }
    68% {
      color: black;
      transform: skewX(5deg) scaleX(0.9) scaleY(1);
      background-color: transparent;
    }
    80% {
      transform: skewX(5deg) scaleX(1) scaleY(0.6);
    }
    81% {
      color: black;
      transform: skewY(1deg) scaleX(1.5) scaleY(0.2);
    }
    93% {
      color: cyan;
      background-color: transparent;
    }
    95% {
      color: black;
      background-color: magenta;
    }
    98% {
      transform: skewX(-5deg) scaleX(3) scaleY(0.001);
    }
    100% {
      transform: skewX(-20deg) scaleX(5) scaleY(0);
    }
  }
</style>
