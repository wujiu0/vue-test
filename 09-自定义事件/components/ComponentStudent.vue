<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑custom事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
    name: 'ComponentStudent',
    data() {
        return {
            name: '张三',
            sex: '男',
            number: 0,
        };
    },
    methods: {
        sendStudentName() {
            // 触发组件实例对象身上的自定义事件
            // this.$emit('demo');
            this.$emit('custom', this.name);
        },
        unbind() {
            this.$off('custom');
            // this.$off(['custom', 'demo']);
            // this.$off()
        },
        death() {
            this.$destroy();
        },
    },

};
</script>

<style scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>