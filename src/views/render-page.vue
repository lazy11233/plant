<template>
<div>
  <list :list="nameList" :render="renderFunc"></list>
</div>
</template>
<script>
import list from '_c/list'
export default {
  name: 'render-page',
  components: {
    list
  },
  data () {
    return {
      nameList: [
        { name: 'lison' },
        { name: 'lili' }
      ]
    }
  },
  methods: {
    renderFunc (h, name) {
      return h('i', {
        style: {
          color: 'pink',
          fontSize: '40px'
        }
      }, name)
    }
  }
}
</script>
