<template>
  <h2>我是About</h2>
</template>

<script>
export default {
    name: 'About',
    beforeRouteEnter(to, from, next) {
        console.log('组件内路由守卫......about.....beforeRouteEnter');
        console.log(to, from);
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log(to, from);
        console.log('组件内路由守卫......about.........beforeRouteLeave');
    },
};
</script>

<style scoped>

</style>