import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'wx-vue/lib/styles/index.css'
import Wx from 'wx-vue'
import './styles/theme.less'

Vue.use(Wx)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
