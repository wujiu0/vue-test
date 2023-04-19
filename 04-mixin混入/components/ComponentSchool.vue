<template>
  <div>
    <h2 @click="showMsg">{{ msg }}</h2>
  </div>
</template>

<script>
import {mixin} from '@/mixin';

export default {
    name: 'ComponentSchool',
    data() {
        return {
            msg: 'HelloWorld, School',
        };
    },
    // mixins: [mixin],
};
</script>
