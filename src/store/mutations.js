import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, { appName }) {
    state.appName = appName
  },
  SET_APP_VERSION (state) {
    // 触发视图更新
    vue.set(state, 'appVersion', 'v0.0.1')
  }
}
export default mutations
