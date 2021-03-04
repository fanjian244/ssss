import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
// import Routers from './router.js'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import api from './http/api'

Vue.use(VueRouter)
Vue.use(ViewUI)

Vue.config.productionTip = false
//把api挂载在this 上
Vue.prototype.$api=api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
