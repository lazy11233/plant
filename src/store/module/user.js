const state = {
  userName: 'lison'
}
const mutations = {
  SET_USER_NAME (state, { name }) {
    state.userName = name
  }
}
const actions = {
  //
  updateUserName ({ commit, state, rootState }) {
    // rootState.appName
  }
}
const getters = {
  filterLetter: state => state.userName.substr(0, 1)
}
const user = {
  state,
  mutations,
  actions,
  getters
}

export default user
