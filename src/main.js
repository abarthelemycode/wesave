import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routing'


Vue.config.productionTip = false


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
