<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'a-menu'
}
</script>
<style lang="scss">
  ul,li {
    list-style: none;
  }
</style>
