<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>获取的学校名:{{ schoolName }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'ComponentStudent',
    data() {
        return {
            name: '张三',
            sex: '男',
            schoolName: '',
        };
    },
    mounted() {
        this.pubId = pubsub.subscribe('sendSchoolName', (_, val) => {
            this.schoolName = val;
        });

    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId);
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