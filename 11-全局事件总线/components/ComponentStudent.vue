<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>获取的学校名:{{ schoolName }}</h2>
  </div>
</template>

<script>
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
        console.log(this);
        this.$bus.$on('sendSchoolName', (value, bn) => {
            console.log(value, bn);
            this.schoolName = value;
        });
    },
    beforeDestroy() {
        this.$bus.$off('sendSchoolName');
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