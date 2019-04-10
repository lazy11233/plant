<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    {{food}}
    <hr>
    <button @click="getUserInfo">获取用户信息</button>
    <img :src="img" alt="">
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: { HelloWorld },
  data () {
    return {
      img: ''
    }
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  methods: {
    handleClick (type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        const name = 'lazy'
        this.$router.push({
          path: `/argu/${name}`
          // path 和 params 不能同时存在
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getUserInfo () {
      getUserInfo().then(res => {
        this.img = res.data.img
        console.log(res.data)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    // 进来尚未渲染，获取不到this
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // 即将离开时调用
    // const leave = confirm('您确定要离开吗')
    // if (leave) {
    //   next()
    // } else {
    //   // do nothing
    // }
  },
  beforeRouteUpdate (to, from, next) {
    // 路由发生变化，组件复用才会调用
  }
}
</script>
