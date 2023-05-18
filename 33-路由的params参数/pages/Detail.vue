<template>
  <ul>
    <li>消息编号：{{ $route.params }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
};
</script>

<style scoped>

</style>