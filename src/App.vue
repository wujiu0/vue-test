<template>
  <div class="container">
    <Category title="游戏">
      <ul slot="center" slot-scope="data">
        <li v-for="(game, index) in data.games" :key="index">
          {{ game }}
        </li>
      </ul>
    </Category>
    <Category title="游戏">
      <ol slot="center" slot-scope="{games}">
        <li v-for="(game, index) in games" :key="index">
          {{ game }}
        </li>
      </ol>
    </Category>
  </div>

</template>
<script>

import Category from '@/components/Category.vue';

export default {
    components: {Category},

};
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
}
</style>