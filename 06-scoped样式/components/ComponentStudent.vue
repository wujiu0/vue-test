<template>
  <div class="demo">
    <h2 class="title"> {{ name }}</h2>
    <h2> {{ msg }}</h2>
  </div>
</template>

<script>

export default {
    name: 'ComponentStudent',
    data() {
        return {
            msg: 'HelloWorld, student',
            name: 'student',
        };
    },
};
</script>
<style scoped>
.title {
    color: green;
}
</style>
