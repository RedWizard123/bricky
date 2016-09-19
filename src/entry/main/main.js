/* eslint-disable no-new */
require('../../scss/main.scss')
import Vue from 'vue'
import VueResource from 'vue-resource'
import Navheader from '../../components/Header.vue'
import Navmenu from '../../components/Menu.vue'
let WarnPlugin = require('../../components/Warn/Warn.js')
Vue.use(WarnPlugin)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

new Vue({
  el: '#nav-wrap',
  components: { Navheader }
})
new Vue({
  el: '#menu-wrap',
  components: { Navmenu }
})
