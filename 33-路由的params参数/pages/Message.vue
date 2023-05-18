<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由携带params参数， to 的字符串写法-->
        <!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>-->
        <!--         跳转路由携带params参数， to的对象写法 (只能使用name，无法使用path-->
        <router-link :to="{
                    name:'detail',
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }">
          {{ m.title }}
        </router-link>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Detail from '@/pages/Detail.vue';

export default {
    name: 'Message',
    components: {Detail},
    data() {
        return {
            messageList: [
                {id: '001', title: '消息001'},
                {id: '002', title: '消息002'},
                {id: '003', title: '消息003'},
            ],
        };
    },
};
</script>

<style scoped>

</style>