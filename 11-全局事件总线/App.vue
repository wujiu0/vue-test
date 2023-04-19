<template>
  <div>
    <ComponentSchool/>

    <ComponentStudent/>
  </div>
</template>

<script>


import ComponentStudent from '@/components/ComponentStudent.vue';
import ComponentSchool from '@/components/ComponentSchool.vue';

export default {
    name: 'App',
    components: {ComponentSchool, ComponentStudent},
    data() {
        return {};
    },

    methods: {},

};
</script>
<style>
.app {
    background-color: gray;
    padding: 5px;
}
</style>