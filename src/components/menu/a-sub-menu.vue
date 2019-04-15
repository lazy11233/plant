<template>
  <ul class="a-sub-menu">
    <div class="a-sub-menu-title" @click="handleClick">
      <slot name="title"></slot>
      <span :style="{transform: `rotateZ(${showChild ? '0' : '180'}deg)`}">^</span>
    </div>
    <div v-show="showChild" class="a-sub-menu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: 'a-sub-menu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>
<style lang="scss" scoped>
.a-sub-menu {
  &-title {
  }
  &-child-box {
    padding-left: 20px;
  }
}
</style>
