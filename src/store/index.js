import vuex from "vuex"
import Vue from "vue"
import channels from "./channels";
import loginUser from "./loginUser";

//1.安装
Vue.use(vuex);
var store = new vuex.Store({
    //配置
    modules: {
        channels,
        loginUser,
    }
})

export default store;