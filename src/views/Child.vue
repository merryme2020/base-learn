<template>
    <div>
        <h3>Child</h3>
        <h5>{{msg}}</h5>
        <h6>{{childMsg}}</h6>
        <button @click="passMsg">按钮</button>
    </div>
</template>

<script>
    import bus from '../util/bus'
    export default {
        props: {
            msg: {
                type: String,
                default: ''
            },
        },
        data() {
           return {
               childMsg: 'Child Message'

           }

        },
        methods: {
            passMsg() {
                this.$emit('showMsg','I am from Child') //通过this.$emit传递一个自定义事件（showMsg）
            }
        },
        //在DOM渲染完成之后，监听事件
        mounted() {
            console.log('attrs',this.$attrs)
            bus.$on('msg',(val) => { //val就是接收app.vue传递过来的数据
                this.childMsg = val //赋值

            });//监听自定义事件(自定义事件名称，回调函数)
        },
    }
</script>

<style scoped>

</style>
