export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    props: route => ({
      food: route.query.food
    })
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') {
    //     alert('这是从about来的')
    //     next()
    //   } else {
    //     alert('这不是从about来的')
    //     next()
    //   }
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    props: {
      food: 'bananas'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/home',
    redirect: () => '/'
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
