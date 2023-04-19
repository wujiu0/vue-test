<template>
  <div>
    <ComponentStudent/>
    <ComponentStudent2/>
  </div>
</template>

<script>

import ComponentStudent from '@/components/ComponentStudent.vue';
import ComponentStudent2 from '@/components/ComponentStudent2.vue';

export default {
    name: 'App',
    components: {
        ComponentStudent2,
        ComponentStudent,
    },
    methods: {},
};
</script>
<style>
.demo {
    background-color: skyblue;
}
</style>
