<template>
  <div class="card-horizontal row">
    <div class="col">
      <!-- 이미지 -->
        <!-- TODO 이미지 비율 유지 IE 10+ -->
        <img class="card-image" :src="imageUrl" />
    </div>
    <div class="col">
        <!-- 카드 타이틀 영역 -->
      <div class="card-title">
        {{ title }}
      </div>

       <!-- 카드 텍스트 영역 -->
      <div 
        v-if="isExistText" 
        class="card-text"
      >
        <slot name="text" />
      </div>

       <!-- 카드 액션 영역 -->
      <div 
        v-if="isExistActions" 
        class="card-actions"
      >
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    imageUrl: {
      type: String,
      required: false,
      default: require('../assets/idus.png')
    },

    title: {
      type: String,
      required: false,
      default: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur a voluptatem et iste itaque magnam expedita ipsum architecto asperiores debitis ipsa, quibusdam assumenda corporis facilis odit modi repellendus officia!'
    },
  },

  computed: {
    isExistText() {
      return this.$slots.text && this.$slots.text.length > 0;
    },

    isExistActions() {
      return this.$slots.actions && this.$slots.actions.length > 0;
    },
  },
}
</script>

<style scoped>
.col:nth-child(2) {
  width: 400px;
}

.card-horizontal {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 16%), 0 2px 2px 0 rgb(0 0 0 / 11%), 0 1px 5px 0 rgb(0 0 0 / 10%);
  border-radius: 1em;
  border: 1px solid lightgrey;
  height: 220px;
}

.card-image {
  width: 220px;
  border-radius: 1em 0 0 1em;
}

.card-title {
  padding: 16px 24px 0 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.card-text {
  padding: 16px 24px 0 24px;
}

.card-actions {
  padding: 24px 24px 0 24px;
}
</style>