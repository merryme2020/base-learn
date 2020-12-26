import Vue from 'vue'
import Vuex from 'vuex'
import text from "./text"; //引入text模块
/***
 * 入口js文件，作用创建vuex实例
 */
Vue.use(Vuex)

export default new Vuex.Store({
  //声明模块
  modules: { //对象
    text  //当键名和值相同，写一个。

  }
})
