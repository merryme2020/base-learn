<template>
    <div>
        this is home
        <h1>{{$route.params.id}}</h1>
       <!--显示路由里面定义的主键-->
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>
