<template>
    <div>
        <h1>Parent</h1>
        <h3>{{msg}}</h3>
        <h5>vuex: <span style="color: red">{{count}}</span> </h5>
        <h5>getters: <span style="color: red">{{doubleCount}}</span> </h5>
        <button @click="add">增加</button>
        <!-- <m-child v-bind:msg="'from Parent msg'"></m-child>-->
        <!--v-bind简写如下，:msg="'from Parent msg'" 绑定一个变量msg,不写冒号默认是一个字符串-->
        <m-child msg="from Parent msg" @showMsg="showMsg" ref="child" v-bind="this.$attrs"></m-child><!--@符号作用：1、监听vue里面本身事件2、监听自定义事件-->
    </div>
</template>
<script>
    //引入child
    import MChild from './Child'
    //引入辅助函数
    import { mapState,mapGetters } from 'vuex'
    export default {

        //使用vuex中的数据，方式1使用计算属性
        // computed: {
        //     count() {
        //         return this.$store.state.count
        //     }
        // },
        //使用vuex中的数据，方式2使用辅助函数
        // computed: mapState({
        //     count: 'count'
        //
        // }),
        //对象展开运算符，对mapState（对象）进行展开，根其他的计算属性合并，可以一起使用
        computed: {
            ...mapState({
            count: state => state.text.count// count: 'count'  //  count: state => state.count.count
            }),
//vuex计算属性-Getters使用使用方式2辅助函数来写
            ...mapGetters([
                'doubleCount'   //数组
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
