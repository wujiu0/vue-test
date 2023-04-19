<template>
  <div>
    <h2 @click="showMsg">{{ msg }}</h2>
  </div>
</template>

<script>
import {mixin} from '@/mixin';

export default {
    name: 'ComponentStudent',
    data() {
        return {
            msg: 'HelloWorld, student',
        };
    },
    // mixins: [mixin],
};
</script>
