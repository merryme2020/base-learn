<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
                title="提示"
                :visible="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
<!--            注释掉插槽-->
<!--            <span slot="footer" class="dialog-footer">-->
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--  </span>-->
        </el-dialog>


        <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">hover 激活</el-button>
        </el-popover>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false
            };
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')

                    .then(_ => {
                        this.dialogVisible = false
                        done();
                    })
                    .catch(_ => {});
            }
        }
    };
</script>

<style scoped>

</style>
