const state = {
  isTyping: false,
  message: null,
};

const getters = {
  isTyping: (state) => state.isTyping,
  message: (state) => state.message,
};

const actions = {

};

const mutations = {
  setIsTyping: (state, isTyping) => {
    state.isTyping = isTyping;
  },
  setMessage: (state, message) => {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}