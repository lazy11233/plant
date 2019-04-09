<template>
  <div>
    <a-input v-model="inputValue" @input="handleInput"/>
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <p><a-show :content="inputValue"/></p>
<!--    <p>{{ appName }}</p>-->
    <p>{{ userName }} first letter is {{ filterLetter }}</p>
  </div>
</template>
<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import { mapState, mapGetters } from 'vuex'

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
      userName: state => state.user.userName
    }),
    inputValueLastLetter () {
      console.log(this.$store.state)
      return this.inputValue.substr(-1, 1)
    },
    ...mapGetters(['filterLetter'])
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
