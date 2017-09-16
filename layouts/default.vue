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

<style>

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;
    background-color: black;
    font-family: garamond;
    font-size: 16px;
    line-height: 1.875em;
  }

  body > div {
    flex: 1 0 auto;
    margin: 20px;
    background-color: white;
  }

</style>
