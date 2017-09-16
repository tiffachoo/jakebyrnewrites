<template>
  <header class="header">
    <a href="/" class="logo">Jake Byrne</a>
    <nav role="navigation" class="nav-top">
      <ul class="nav-links">
        <li class="nav-link" v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
          <nuxt-link :to="{ name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  @import "../assets/scss/variables";

  .header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 333;
    top: $body-border-width;
    left: $body-border-width;
    width: calc(100% - (#{$body-border-width} * 2));
    padding: $pad-main;
  }

  .nav-top {
    /*align-self: flex-end;*/
  }
  .nav-link {
    display: inline-block;

    &:not(:last-child) {
      margin: 0 0.5em;
    }
  }

</style>
