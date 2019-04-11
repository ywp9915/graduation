import Vue from 'vue'

import App from './App'

import router from './router'

import Axios from 'axios';

import MintUI from "mint-ui";

import 'mint-ui/lib/style.css';

import "./font-awesome-4.7.0/css/font-awesome.min.css";

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
Vue.use(MintUI);

Vue.prototype.$axios=Axios;
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

