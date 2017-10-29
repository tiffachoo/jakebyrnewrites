<template>
  <header class="header">
    <a href="/" class="logo">
      Jake Byrne
    </a>
    <nav role="navigation" class="nav-top">
      <ul class="nav-items">
        <li 
          v-for="route in this.$router.options.routes" 
          v-if="!/\/.*?\/.*/.test(route.path)" 
          class="nav-item" 
          v-test>
          <nuxt-link 
            class="nav-link"
            :to="{ name: route.name }">
            {{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    directives: {
      test: {
        bind: function (el) {
          el.addEventListener('mouseover', () => {
            el.style.backgroundColor = 'yellow'
          })
          el.addEventListener('mouseout', () => {
            el.style.backgroundColor = null
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 333;
    top: 0;
    left: $body-border-width;
    width: calc(100% - (#{$body-border-width} * 2));
    padding: $space-main;
  }

  .nav {
    &-top {
      /*align-self: flex-end;*/
    }
    &-item {
      display: inline-block;

      &:not(:last-child) {
        margin: 0 0.5em;
      }
    }

    &-link {
      color: $primary-color;
      border-bottom: none;

      &:hover {
        border-bottom: none;
        color: $primary-color-tint-1;
      }
    }

  }

</style>
