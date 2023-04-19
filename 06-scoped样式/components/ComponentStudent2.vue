<template>
  <div class="demo">
    <h2 class="title">{{ name }}</h2>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>

export default {
    name: 'ComponentStudent2',
    data() {
        return {
            msg: 'HelloWorld, student2',
            name: 'student2',
        };
    },
};
</script>

<style scoped>
.title {
    color: red;
}
</style>