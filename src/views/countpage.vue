<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <span slot="left">金额是</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="updateNumber">更新数值</button>
  </div>
</template>
<script>
import CountTo from '_c/count-to'

export default {
  name: 'count-page',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 1000
    }
  },
  methods: {
    getNumber () {
      console.log(this.$refs.countTo.getCount())
    },
    updateNumber () {
      this.endVal = Math.random() * 100
    },
    handleEnd (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
