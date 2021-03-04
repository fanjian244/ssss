import Vue from 'vue'
import VueRouter from 'vue-router'
import creat from '../views/create/create.vue'
import product from '../views/product/product.vue'
import order from '../views/order/order.vue'
import classification from '../views/classification/classification.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/creat',
    name: 'creat',
    component: creat
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  // {
  //   path: '/classification',
  //   name: 'classification',
  //   component: classification
  // },
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
