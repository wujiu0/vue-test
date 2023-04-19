<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-fbind:value="msg">
    <h2>{{ username }}</h2>
  </div>
</template>

<script>

export default {
    name: 'ComponentStudent',
    data() {
        return {
            msg: 'HelloWorld, student',
        };
    },
};
</script>
