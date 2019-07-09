import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import "../public/static/layui-master/dist/layui.all.js"
import "../public/static/layui-master/dist/css/layui.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
