import Vue from 'vue'
import App from './App.vue'

// 引入组件库
import ytkComponent from './../packages/index'

Vue.use(ytkComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
