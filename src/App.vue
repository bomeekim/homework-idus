<template>
  <div>
    <h2>과제1. 카드 UI</h2>
    <card-list />

    <h2>과제2. 입력 폼 UI</h2>
    <form-list />
  </div>
</template>

<script>
import CardList from './CardList.vue';
import FormList from './FormList.vue';

export default {
  name: 'App',

  components: {
    CardList,
    FormList
  }
}
</script>

<style>
*:focus {
  outline: 0;
}
</style>
