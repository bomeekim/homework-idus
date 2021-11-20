<template>
  <div>
    <textarea
      :value="text"
      :readonly="readOnly"
      :disabled="disabled"
      :maxlength="counter"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <span v-if="!readOnly && !disabled">
      {{ text.length }} / {{ counter }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Form',

  props: {
    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    counter: {
      type: Number,
      required: true,
    },

    placeholder: {
      type: String,
      required: false,
      default: '텍스트를 입력해주세요.',
    }
  },

  data: () => ({
    text: '',
  }),

  mounted() {
    // ReadOnly, Disabled 인 경우 placeholder 를 text에 넣어준다.
    if (this.readOnly || this.disabled) {
      this.text = this.placeholder;
    }
  },

  methods: {
    /**
     * input 이 변경될 때 마다 호출되는 함수
     * IME가 필요한 언어들은 v-model 을 사용할 경우,
     * 정확하게 데이터 바인딩이 되지 않으므로 다음과 같이 처리한다.
     */
    handleInput(e) {
      this.text = e.target.value;
      this.$emit('change', this.text); 
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
  display: inline-block;
}

span {
  position: absolute;
  bottom: 14px;
  right: 5px;
  font-size: 10px;
  color: grey;
}

textarea {
  border-radius: 5px;
  background: rgb(249, 250, 250);
  border: 1px solid rgb(181, 189, 196);
  font-size: 14px;
  height: 40px;
  line-height: 24px;
  padding: 7px 8px;
  color: rgb(8, 9, 10);
  box-shadow: none;
  width: 510px;
  min-height: 60px;
  margin-bottom: 12px;
  vertical-align: middle;
  resize: none;
}

textarea:active,
textarea:focus {
  background-color: #fff;
  border-color: #ff7b30;
  box-shadow: 1px 1px 0 #ff7b30;
}

textarea:read-only {
  width: 600px;
  border-color: rgb(181, 189, 196);
  box-shadow: none;
}

textarea:disabled {
  background-color: #eee;
  cursor: not-allowed;
  width: 600px;
  color: red;
  border-color:  rgb(181, 189, 196);
  box-shadow: none;
}
</style>
