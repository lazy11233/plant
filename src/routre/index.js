import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOADING = true

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOADING) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    if (HAS_LOADING) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

// router.afterEach((to, from, next) => {
//   // loading = false
// })
//
// // 导航确认之前
// router.beforeResolve((to, from, next) => {
//   //
// })

export default router
