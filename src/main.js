import Vue from 'vue'
import App from './App.vue'
import { Ionic, IonicAPI } from '@modus/ionic-vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

Ionic.init();
Vue.use(IonicAPI)

new Vue({
  router,
  render: h => h(App)
}).$mount('ion-app')
