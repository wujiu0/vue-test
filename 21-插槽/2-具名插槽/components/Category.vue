<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="center">center default</slot>
    <slot name="footer">footer default</slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
};
</script>

<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}

video {
    width: 100%;
}

img {
    width: 100%;
}
</style>