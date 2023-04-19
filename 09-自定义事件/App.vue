<template>
  <div>
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <ComponentSchool :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!--    <ComponentStudent v-on:custom="getStudentName" @demo="demo"/>-->


    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <ComponentStudent ref="student"/>
  </div>
</template>

<script>


import ComponentStudent from '@/components/ComponentStudent.vue';
import ComponentSchool from '@/components/ComponentSchool.vue';

export default {
    name: 'App',
    components: {ComponentSchool, ComponentStudent},
    data() {
        return {
            msg: '你好啊！',
            studentName: '',
        };
    },

    methods: {
        getSchoolName(schoolName) {
            console.log('收到了学校名:' + schoolName);
        },
        demo() {
            console.log('触发demo事件');
        },
        getStudentName(name, ...params) {
            console.log('收到了学生名');
            this.studentName = name;
        },
    },
    mounted() {
        this.$refs.student.$on('custom', this.getStudentName);
    },

};
</script>
<style>
.app {
    background-color: gray;
    padding: 5px;
}
</style>