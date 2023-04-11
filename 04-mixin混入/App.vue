<template>
  <div>
    <ComponentStudent/>
    <ComponentSchool/>
  </div>
</template>

<script>

import ComponentStudent from '@/components/ComponentStudent.vue';
import ComponentSchool from '@/components/ComponentSchool.vue';

export default {
    name: 'App',
    components: {
        ComponentSchool,
        ComponentStudent,
    },
    methods: {},
};
</script>
