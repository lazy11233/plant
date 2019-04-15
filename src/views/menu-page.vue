<template>
  <div class="menu-box">
<!--      <a-menu>-->
<!--        <a-menu-item>11111</a-menu-item>-->
<!--        <a-menu-item>22222</a-menu-item>-->
<!--        <a-sub-menu>-->
<!--          <div slot="title">-->
<!--            3333-->
<!--          </div>-->
<!--          <a-menu-item>333-11</a-menu-item>-->
<!--          <a-menu-item>333-22</a-menu-item>-->
<!--          <a-sub-menu>-->
<!--            <div slot="title">-->
<!--            </div>-->
<!--          </a-sub-menu>-->
<!--        </a-sub-menu>-->
<!--      </a-menu>-->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item :key="`menu-item-${index}`">{{ item.title }}</a-menu-item>
        <re-submenu :key="`submenu-item-${index}`" :parent="item" :i="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from '_c/menu'
import ReSubmenu from '@/views/re-submenu'
const { AMenu, ASubMenu, AMenuItem } = menuComponents
export default {
  name: 'menu-page',
  components: {
    AMenu,
    ASubMenu,
    ReSubmenu,
    AMenuItem
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '222'
        },
        {
          title: '333',
          children: [
            {
              title: '333-1'
            },
            {
              title: '333-2'
            }
          ]
        },
        {
          title: '444',
          children: [
            {
              title: '444-1',
              children: [
                {
                  title: '444-2'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-box {
  height: 300px;
  width: 400px;
}
</style>
