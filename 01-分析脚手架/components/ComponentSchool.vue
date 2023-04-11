<template>
  <div>
    <h2>学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'ComponentSchool',
    data() {
        return {
            name: 'nuc',
            address: 'china',
        };
    },
});
</script>