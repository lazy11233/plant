<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :id="eleId" :class="countClass"></span>
    <slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    /**
     * startVal: 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * endVal: 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * decimals: 小数点后保留几位
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * duration: 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  watch: {
    endVal (newVal) {
      this.counter.update(newVal)
      setTimeout(() => {
        this.$emit('on-animation-end', Number(this.getCount()))
      }, this.duration * 1000)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 不能有一样的ID，使用 __uid
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        userEasing: this.userEasing,
        userGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
      }, this.delay)
    })
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    }
  }
}
</script>
<style lang="scss">
  .count-to-number {
    font-size: 40px;
    font-weight: bold;
    color: pink;
  }
</style>
