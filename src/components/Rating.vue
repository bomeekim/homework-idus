<template>
  <div class="row">
    <div
      v-for="(n, index) in max" 
      :key="index"
      class="circle"
      :class="{ 'circle-filled': Math.round(n) <= rating }"
    />
  </div>
</template>

<script>
const MAX_RATINGS = 5;

export default {
  name: 'Rating',

  props: {
    rating: {
      type: Number,
      required: true,
      validator: (value) => {
        const isOver =  Number(value) >= MAX_RATINGS;

        if (isOver) {
          alert('별점은 1~5 까지 입력할 수 있습니다.');
        }

        return !isOver;
      }
    }
  },

  data: () => ({
    max: MAX_RATINGS
  }),
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