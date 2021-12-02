<template>
  <div class="card">
    <!-- 이미지 -->
    <div class="card-thumnail">
      <img class="card-image" :src="imageUrl" width="100%" height="100%" />
    </div>

    <!-- 카드 레이블 영역 -->
    <div class="card-label" v-if="label">
      {{ label }}
    </div>

    <!-- 카드 타이틀 영역 -->
    <div class="card-title">
      {{ title }}
    </div>

    <!-- 카드 텍스트 영역 -->
    <div
      v-if="isExistText"
      class="card-text"
      :class="{ 'card-text-boder-bottom-none': !isExistActions }"
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

    label: {
      type: String,
      required: false,
      default: 'Card Label',
    },

    title: {
      type: String,
      required: false,
      default: 'Card Title'
    },
  },

  computed: {
    isExistText() {
      return this.$slots.text && this.$slots.text.length > 0;
    },

    isExistActions() {
      return this.$slots.actions && this.$slots.actions.length > 0;
    },

    isRatingWithTextBox() {
      return this.isExistActions && this.$slots.actions[0].tag.indexOf('Rating') === -1;
    },
  },
}
</script>

<style scoped>
div {
  text-align: left;
}

.card {
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 16%), 0 2px 2px 0 rgb(0 0 0 / 11%), 0 1px 5px 0 rgb(0 0 0 / 10%);
  border-radius: 1em;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  flex: none;
  flex-basis: 33.33%;
  box-sizing: border-box;
  min-width: 200px;
}

.card-thumnail {
  flex: auto;
  background-color: #dcdcdf;
}

.card-image {
  border-radius: 1em 1em 0 0;
  vertical-align: top;
}

.card-label {
  padding: 8px 12px;
  font-size: 0.8em;
  color: #999;
}

.card-title {
  padding: 0 12px;
  font-size: 0.95em;
  font-weight: 500;
}

.card-text {
  padding: 24px 12px 12px 12px;
  border-bottom: 1px solid lightgrey;
}

.card-text-boder-bottom-none {
  border-bottom: none;
}

.card-actions {
  padding: 12px;
  align-items: center;
  display: flex;
  min-height: 40px;
}

.card-actions-mx-3-my-4 {
  padding: 24px 12px;
}
</style>
