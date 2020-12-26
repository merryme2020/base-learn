<template>
    <div>
        <h1>Parent</h1>
        <h3>{{msg}}</h3>
        <h5>vuex: <span style="color: red">{{count}}</span> </h5>
        <h5>getters：<span style="color: red">{{doubleCount}}</span> </h5>
        <button @click="add">增加</button>
        <!-- <m-child v-bind:msg="'from Parent msg'"></m-child>-->
        <!--v-bind简写如下，:msg="'from Parent msg'" 绑定一个变量msg,不写冒号默认是一个字符串-->
        <m-child msg="from Parent msg" @showMsg="showMsg" ref="child" v-bind="this.$attrs"></m-child><!--@符号作用：1、监听vue里面本身事件2、监听自定义事件-->
    </div>
</template>
<script>
    import MChild from './Child'  //引入child
    import { mapState,mapGetters } from 'vuex'  //引入辅助函数
    export default {
        /***
         * 1. 如何使用vuex里面的数据？
         * 有两种方式，都是通过计算属性的方式，但是写法不同
         * 2.为什么要在计算属性里面写？
         * vuex里面的数据是可以动态改变的，所以我们要追踪它的变化。所以我们就在computed里面计算属性里面写。
         * 计算属性能够追踪vuex数据的变化，及时的更新在视图上面。
         */

        /***
         * 使用vuex中的数据，方式1使用计算属性
         */
        // computed: {
        //     count() {
        //         return this.$store.state.count
        //     }
        // },

        /***
         * 使用vuex中的数据，方式2使用辅助函数
         */
        // computed: mapState({
        //     count: 'count'
        //
        // }),

        /**
         * 既想使用计算属性又想使用vuex里面的一些数据（es6的对象展开符进行操作）
         * 对象展开运算符，对mapState（对象）进行展开，根其他的计算属性合并，可以一起使用
         */

        computed: {
            /**
             *  使用模块，取出state,必须加上模块名字，所以不能用辅助函数字符串写法来使用计算属性。
             *  因为它的字符串写法'count'等同于state =>state.count,所以要使用箭头函数调用
             *
             */
            ...mapState({
                // count: 'count'

            count: state => state.text.count  //  count: state => state.count.count
            }),

            /**
             * //计算属性doubleCount名字和getters里面的名字一样
             * 传入一个字符串 等同于this.$store.getters.doubleCount
             * vuex计算属性-Getters使用使用方式2辅助函数来写*/
            ...mapGetters([   //数组
                'doubleCount'   //this.$store.getters.doubleCount
            ])
            //vuex计算属性-Getters使用方式1
            // doubleCount() {
            //     return this.$store.getters.doubleCount
            // }

         },


        data() {
            return {
                msg: ''
            }
        },
        //注册
        components: {
            MChild,
        },
        methods: {
            showMsg(val) {
                this.msg = val
            },
            add() {
                // this.$store.commit('add')  //触发mutations ($store可以理解为vuex,生成一个store实例)
                this.$store.dispatch('delayAdd')//触发Actions
            }
        },
        mounted() {
            console.log(this.$children[0])
            console.log('ref',this.$refs.child)
        }
    }
</script>
<style scoped>
</style>
