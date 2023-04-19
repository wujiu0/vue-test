<template>
  <div class="school">
    <h2>学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
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
};
</script>

<style>
.school {
    background-color: lightgray;
}
</style>