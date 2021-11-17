<template>
  <div>
    <h2>과제1. 카드 UI</h2>
    <card-list />
  </div>
</template>

<script>
import CardList from './CardList.vue';

export default {
  name: 'App',

  components: {
    CardList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
