<template>
  <div>
    <ComponentSchool></ComponentSchool>
    <hr>
    <ComponentStudent></ComponentStudent>
  </div>
</template>

<script>
import ComponentSchool from '@/components/ComponentSchool.vue';
import ComponentStudent from '@/components/ComponentStudent.vue';

export default {
    name: 'App',
    components: {ComponentSchool, ComponentStudent},
};
</script>
