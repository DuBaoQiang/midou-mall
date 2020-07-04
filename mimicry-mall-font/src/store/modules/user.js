export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {},
  actions: {},
  getters: {
    token: (state) => state.userInfo.token
  },
}
