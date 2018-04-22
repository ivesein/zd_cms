// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import Vuex from 'vuex'

require('../mock/mock1')
require('../mock/mock2')


Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);
// Vue.use(Vuex)
import store from '../store/store'
// Vue.prototype.$store = store
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})