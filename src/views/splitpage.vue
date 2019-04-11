<template>
  <div class="split-pane-con">
    <split-pane :value.sync="offset">
      <span slot="left">left</span>
      <span slot="right">right</span>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
  name: 'split-page',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.8
    }
  }
}
</script>
<style lang="scss" scoped>
  .split-pane-con {
    width: 400px;
    height: 200px;
    background: papayawhip;
  }
</style>
