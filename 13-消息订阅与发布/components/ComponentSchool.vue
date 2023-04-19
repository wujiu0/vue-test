<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给student</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'ComponentSchool',
    data() {
        return {
            name: 'nuc',
            address: 'china',
        };
    },
    methods: {
        sendSchoolName() {
            pubsub.publish('sendSchoolName', this.name);
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