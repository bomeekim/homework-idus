<template>
  <div class="form-list">
    <div class="input-default-row">
      <!-- default, typing -->
      <input-form 
        :counter="500" 
        placeholder="텍스트를 입력해주세요."
        @change="handleMessageChange"
      />
      <button 
        :disabled="disabledButton"
        @click="handleSaveButtonClick"
      >
        Save
      </button>
    </div>
    <!-- read only -->
    <input-form read-only :counter="500" placeholder="read only"/>
    <!-- disabled -->
    <input-form disabled :counter="500" placeholder="disabled"/>
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations } = createNamespacedHelpers('input');

export default {
  name: 'FormList',

  components: { InputForm },

  data: () => ({
    currentMessage: null,
    disabledButton: true,
  }),

  computed: {
    ...mapGetters([
      'isTyping',
      'message',
    ]),
  },

  methods: {
    ...mapMutations([
      'setIsTyping',
      'setMessage',
    ]),

    /**
     * 메시지가 변경될 떄 호출되는 함수
     * @param message input 에 입력된 메시지
     */
    handleMessageChange(message) {
      // vuex state 에 저장된 메시지와 비교한다. 같은 경우 저장버튼을 비활성화한다.
      this.disabledButton = this.message === message;

      // 현재 input 의 메시지를 currentMessage에 저장한다.
      this.currentMessage = message;
    },

    /**
     * 저장 버튼을 눌렀을 때 호출되는 함수
     */
    handleSaveButtonClick() {
      // vuex state 에 저장된 메시지와 현재 메시지를 비교해 상태를 변이시킨다.
      if (this.message !== this.currentMessage) {
        this.setMessage(this.currentMessage);
      }

      // 버튼을 비활성화로 변경한다.
      this.disabledButton = true;
    }
  }
}
</script>

<style>
.form-list {
  display: flex;
  flex-direction: column;
  margin: 12px;
}

.input-default-row {
  display: flex;
  flex-direction: row;
}

input {
  margin-bottom: 8px;
}

button {
  margin: 0 0 12px 4px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 50px;
  font-weight: 600;
  border-radius: 8px;
  padding: 14px 24px;
  border: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: linear-gradient(to left, #ff512f, #f09819);
  color: #fff;
  vertical-align: middle;
}

button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
