import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Lazyload } from 'mint-ui';
import store from './store/index'
Vue.use(Lazyload);
// Vue.use(InfiniteScroll);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
