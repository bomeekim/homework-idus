<template>
  <div class="card-horizontal row">
    <div class="col">
      <!-- 이미지 -->
      <div class="card-thumbnail">
        <img class="card-image" :src="imageUrl" width="100%" height="100%" />
      </div>
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
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card-horizontal {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 16%), 0 2px 2px 0 rgb(0 0 0 / 11%), 0 1px 5px 0 rgb(0 0 0 / 10%);
  border-radius: 1em;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: row;
  flex: none;
  flex-basis: 33.33%;
  box-sizing: border-box;
  min-width: 80px;
  margin: 12px;
}

.card-image {
  border-radius: 1em 0 0 1em;
  vertical-align: top;
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

@media (min-width: 980px) {
  .card-text > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

@media (min-width: 800px) and (max-width: 980px) {
  .card-text > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

@media (max-width: 800px) {
  .card-text > p {
    width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.card-actions {
  padding: 20px 24px;
}
</style>
