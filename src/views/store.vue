<template>
  <div>
    <a-input v-model="inputValue" @input="handleInput"/>
    <p>{{ inputValue }}</p>
    <p>
      <a-show :content="inputValue"/>
    </p>
  </div>
</template>
<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
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
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
