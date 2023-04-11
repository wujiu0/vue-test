<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name: 'ComponentStudent',
    data() {
        return {
            msg: 'HelloWorld',
            myAge: this.age,
        };
    },
    // props: ['name', 'sex', 'age'],
    /*props: {
        name: String,
        sex: String,
        age: Number,
    },*/
    props: {
        name: {
            type: String,
            default: 'wujiu',
        },
        sex: {
            type: String,
            require: true,
        },
        age: {
            type: Number,
            default: 28,
        },
    },
    methods: {
        updateAge() {
            this.myAge++;
        },
    },
};
</script>
