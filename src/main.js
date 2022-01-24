// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 封装引入axios
import fetch from './axios/axios'


Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$axios', { value: fetch });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
