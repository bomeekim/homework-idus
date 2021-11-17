<template>
  <div class="row">
    <!-- #1. 첫번째 카드 -->
    <card>
      <template v-slot:text>
        <p>
          <span class="hilight">Hilight</span>
          <del>Cross Out</del>
        </p>
      </template>
      <template v-slot:actions>
        <div class="rating-with-text-box">
          <rating :rating="Number(3)" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur a voluptatem et iste itaque magnam expedita ipsum architecto asperiores debitis ipsa, quibusdam assumenda corporis facilis odit modi repellendus officia!</p>
        </div>
      </template>
    </card>

    <!-- #2. 두번째 카드 -->
    <card>
      <template v-slot:text>
        <p>
          <span class="hilight">Hilight</span>
          <del>Cross Out</del>
        </p>
      </template>
      <template v-slot:actions>
        <!-- TODO p 태그가 없을 때 rating 컴포넌트 위치 조정 -->
        <rating :rating="Number(3)" />
      </template>
    </card>

    <!-- #3. 세번째 카드 -->
    <card>
      <template v-slot:text>
        <p>
          <span class="hilight">Hilight</span>
          <del>Cross Out</del>
        </p>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Rating from './components/Rating.vue'

export default {
  name: 'CardList',

  components: { 
    Card, 
    Rating,
  },
}
</script>

<style scoped>
.row {
  display: flex;
}

.row > .card {
  margin-right: 12px;
}

p {
  margin: 0;
  font-size: 0.9em;
}

span.hilight {
  color: red;
}

del {
  margin-left: 4px;
  font-size: 0.8em;
  color: darkgray;
}

.card-actions > .rating-with-text-box {
  width: -webkit-fill-available;
}

.card-actions > .rating-with-text-box p {
  font-size: 0.8em;
  margin-top: 8px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>