<template>
    <div>
<!--            基本表格-->
<!--            <el-table :data="tableData" style="width: 100%"  height="200px" border>-->
<!--                <el-table-column prop="date" label="日期" width="180">-->
<!--                </el-table-column>-->
<!--                <el-table-column prop="name" label="姓名" width="180">-->
<!--                </el-table-column>-->
<!--                <el-table-column prop="address" label="地址" show-overflow-tooltip>-->
<!--                </el-table-column>-->
<!--                <el-table-column label="操作">-->
<!--                    <template slot-scope="scope">-->
<!--                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
<!--                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
<!--                    </template>-->
<!--                </el-table-column>-->
<!--            </el-table>-->
            <el-table :data="tableData">
                <el-table-column v-for="(val, key) in tableLabel " :key="key" :prop="key" label="val" width="180">
                </el-table-column>
                 <!-- 通过v-if判断是否显示操作-->
                <el-table-column label="操作" v-if="isShowOperated">
                    <!--将子组件的变量scope绑定到标签上，可以在标签上使用变量，这个变量随意命名，它随意命令都是绑定在子组件里面的-->
                    <template slot-scope="scope"><!--通过作用域插槽，来绑定。绑定好之后可以在父组件里面调用-->
                        <!--通过scope可以调用子组件里面的变量（el-table-column组件定义好的）-->
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>  <!--scope.row ：表格行的数据-->
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

    </div>
</template>

<script>
    export default {
        props: {
            isShowOperated: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tableLabel: {//它是对象，循环出tableLabel对象直接渲染出列
                    date: '日期',
                    name: '姓名',
                    address: '地址'
                }
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
                this.$emit('edit',row)
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>

</style>
