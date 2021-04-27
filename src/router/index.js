import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'default',
    },
    component: () => import('../views/Home'),
  },
  {
    path: '/toure/:id',
    name: 'Toure',
    meta: {
      layout: 'default',
    },
    component: () => import('../views/Toure'),
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      layout: 'default',
    },
    component: () => import('../views/Cart'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
