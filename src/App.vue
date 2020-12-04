<template>
  <div id="app">
<!--      需要一个按钮-->
<!--   <button @click="passMsg">传你</button>  &lt;!&ndash;绑定一个事件&ndash;&gt;-->
<!--   <m-parent :msg="a" :msgb="b" :msgc="c"></m-parent>-->
<!--      this is app-->
<!--      <router-link to="/home">home</router-link>-->
<!--      <button @click="toHome">home</button>-->
      <router-view></router-view>

  </div>
</template>

<style>
</style>
<script>
    import bus from './util/bus'
  //引入父组件
  import MParent from './views/Parent' //默认找到.vue后缀名的文件
  export default {
        //定义数据
      data() {
          return {
              a: 'var1',
              b: 'var2',
              c: 'var3',

          }
      },
    //注册
    components: {
      MParent,

    },

      methods: {
        passMsg() {
            //触发一个自定义事件，传递事件
            bus.$emit('msg','i am from app')
        },
         toHome() {
             // this.$router.push({path: '/home',query:{name: 'Jack'}})  函数式
             this.$router.push({ name: 'home', params: {id: '3'}})


          }

      },

  }

</script>
