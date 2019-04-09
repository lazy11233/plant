<template>
  <div>
    <button @click="handleClick">点我</button>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello email')
    }
  }
}
</script>
