<template>
  <div>
    <ComponentSchool ref="school"/>
    <button @click="showDom">点我输出上方的DOM元素</button>
  </div>
</template>

<script>

import ComponentSchool from '@/components/ComponentSchool.vue';

export default {
    name: 'App',
    components: {
        ComponentSchool,
    },
    methods: {
        showDom() {
            console.log(this.$refs.school);
        },
    },
};
</script>
