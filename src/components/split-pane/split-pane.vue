<template>
  <div ref="outer" class="split-pane-wrapper">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${triggerWidth / 2}px`}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" :style="{ left: triggerLeft, width: `${triggerWidth}px` }" @mousedown="handleMouseDown"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${triggerWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'split-pane',
  props: {
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    },
    value: {
      type: Number,
      default: 0.5
    }
  },
  data () {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.leftOffsetPercent} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMouseDown (event) {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove (event) {
      if (!this.canMove) { return }
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.$emit('input', offsetPercent)
      this.$emit('update:value', offsetPercent)
    },
    handleMouseUp () {
      this.canMove = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .split-pane-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .pane {
      position: absolute;
      top: 0;
      float: left;
      height: 100%;
      &-left {
        width: 30%;
        background: palevioletred;
      }
      &-right {
        left: 30%;
        right: 0;
        bottom: 0;
        background: paleturquoise;
      }
    }
    .pane-trigger-con {
      position: absolute;
      height: 100%;
      background: red;
      top: 0;
      user-select: none;
      z-index: 1;
      cursor: col-resize;
    }
  }
</style>
