<template>
  <div>
    <button @click="getStudentList">获取学生信息</button>
    <button @click="getCarList">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        getStudentList() {
            axios.get('http://localhost:8080/students')
                .then((response) => {
                    console.log(response.data);
                });
        },
        getCarList() {
            axios.get('http://localhost:8080/demo/cars')
                .then((response) => {
                    console.log(response.data);
                });
        },
    },
};
</script>