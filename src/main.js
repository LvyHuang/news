import Vue from 'vue'
import App from './App.vue'
import "./assets/style/global.css"
import "./assets/style/reset.css"
import router from "./router";
import store from "./store/index"


new Vue({
  render: h => h(App),
  router:router,   //3.配置路由到vue实例中
  store:store,
}).$mount('#app')
