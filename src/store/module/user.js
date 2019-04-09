const state = {
  userName: 'lison'
}
const mutations = {
  //
}
const actions = {
  //
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
