<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
    name: 'ComponentSchool',
    data() {
        return {
            name: 'nuc',
            address: 'china',
        };
    },
    props: {
        getSchoolName: {
            type: Function,
        },
    },
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name);
        },
    },
};
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>