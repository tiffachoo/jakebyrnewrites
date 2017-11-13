<template>
  <header class="header">
    <a href="/" class="logo">
      Jake Byrne
    </a>
    <nav role="navigation" class="nav-top">
      <ul class="nav-items">
        <li
          v-for="route in $router.options.routes"
          v-if="!/\/.*?\/.*/.test(route.path)"
          :key="route.id"
          class="nav-item">
          <nuxt-link
            class="nav-link"
            :to="{ name: route.name }">
            {{ route.name.toUpperCase() }}
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
    position: fixed;
    z-index: 333;
    top: 0;
    left: $body-border-width;
    width: calc(100% - (#{$body-border-width} * 2));

    @media (min-width: $md) {
      padding: $space-main;
    }

    @media (max-width: $md - 1) {
      padding: $space-main-sm;
    }

    @media (min-width: $sm) {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: $sm - 1) {
      text-align: center;
    }

    a {
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }
    }

    .logo {
      font-style: italic;
      font-size: 1.125em;
    }
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

      &:hover {
        color: $primary-color-tint-1;
      }
    }

  }

</style>
