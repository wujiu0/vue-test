<template>
  <div>
    <ComponentStudent ref="" name="wujiu" :age="18" sex="nan"/>
  </div>
</template>

<script>

import ComponentStudent from '@/components/ComponentStudent.vue';

export default {
    name: 'App',
    components: {
        ComponentStudent,
    },
    methods: {},
};
</script>
