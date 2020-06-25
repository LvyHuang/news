import Vue from 'vue'
import App from './App.vue'
import "./assets/style/global.css"
import "./assets/style/reset.css"

//import {getNewsChannels} from "./services/newsService"

/*
//第一种使用方式
getNewsChannels().then((resp)=>{
  console.log(resp);
})
*/
//第二种使用方式
// async function test() {
//   var resp = await getNewsChannels();
//   console.log(resp);
// }
// test();

// async function test2() {
//   var resp = await getNews("5572a109b3cdc86cf39001db",2,5);
//   console.log(resp);
// }
// test2();
new Vue({
  render: h => h(App),
}).$mount('#app')
