<template>
	<div class="hero">
    <h2 class="hero-header">
    	{{ title }}
    </h2>
  	<slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .hero {
    @extend %main-container;

    @media (min-width: $lg) {
      position: fixed;
      z-index: 2;
      top: $body-border-width + $space-offset-top;
      left: $body-border-width + $space-main;
      max-width: calc(#{$space-offset-left} - #{$space-gutter} - #{$body-border-width});
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

    &-small-text {
      font-style: italic;
      font-size: 1.125em;
    }
  }
</style>
