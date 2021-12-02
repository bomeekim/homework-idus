<template>
  <div class="card-list-wrapper">
    <div class="vertical-card-wrapper row">
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
    <div class="horizontal-card-wrapper">
      <card-horizontal>
        <template v-slot:text>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequatur a voluptatem et iste itaque magnam expedita ipsum architecto asperiores debitis ipsa, quibusdam assumenda corporis facilis odit modi repellendus officia!</p>
        </template>
        <template v-slot:actions>
          <div class="row">
            <rating :rating="Number(3)" />
            <p>
              <span class="pipeline"> | </span>
              <span>John Doe</span>
            </p>
          </div>
        </template>
      </card-horizontal>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import CardHorizontal from './components/CardHorizontal.vue'
import Rating from './components/Rating.vue'

export default {
  name: 'CardList',

  components: {
    Card,
    Rating,
    CardHorizontal
  },
}
</script>

<style scoped>
.card-list-wrapper {
  width: 70%;
}

.row {
  display: flex;
}

.row > .card,
.row > .card-horizontal {
  margin: 12px;
}

.vertical-card-wrapper {
  display: flex;
  align-items: flex-start;
}

.horizontal-card-wrapper {
  min-width: 500px;
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
  width: 100%;
}

.card-actions > .rating-with-text-box p {
  font-size: 0.8em;
  margin-top: 8px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-actions .pipeline {
  margin: 0 8px;
}
</style>
