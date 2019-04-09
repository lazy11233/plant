<template>
  <div>
    <a-input v-model="inputValue" @input="handleInput"/>
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <p><a-show :content="inputValue"/></p>
    <p>appName => {{ appName }}</p>
    <p>{{ userName }} first letter is {{ filterLetter }}</p>
    <p>{{ appVersion }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <button @click="handleChangeUserName">修改用户名</button>
    <button @click="handleRegister">动态注册模块</button>
    <div v-for="(v,i) in todoList" :key="i">{{ v }}</div>
  </div>
</template>
<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Store',
  components: {
    AInput,
    AShow
  },
  data () {
    return {
      inputValue: '默认值'
    }
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.todo ? this.todo.state.todoList : []
    }),
    inputValueLastLetter () {
      console.log(this.$store.state)
      return this.inputValue.substr(-1, 1)
    },
    ...mapGetters(['filterLetter'])
  },
  methods: {
    ...mapActions(['updateAppName']),
    ...mapMutations(['SET_APP_NAME', 'SET_USER_NAME']),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // this.updateAppName()
      this.$store.dispatch('updateAppName')
    },
    handleChangeUserName () {
      this.SET_USER_NAME({ name: '模块名称' })
    },
    handleRegister () {
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习mutations',
            '学些actions'
          ]
        }
      })
    }
  }
}
</script>
