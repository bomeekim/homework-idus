<template>
  <div class="row">
    <div
      v-for="(n, index) in 5" 
      :key="index"
      class="circle"
      :class="{ 'circle-filled': n <= rating }"
    />
  </div>
</template>

<script>
export default {
  name: 'Rating',

  props: {
    rating: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped>
.row {
  display: flex;
}

.circle { 
  width: 24px;
  height: 24px;
  background: lightgrey;
  -moz-border-radius: 70px; 
  -webkit-border-radius: 70px; 
  border-radius: 70px;
  margin-right: 2px;
}

.circle-filled {
  background: #f5c102;
}
</style>