import Vue from 'vue'
import VueRouter from 'vue-router'
import creat from '../views/create/create.vue'
import product from '../views/product/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'creat',
    component: creat
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
