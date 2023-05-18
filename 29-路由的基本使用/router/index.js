// 该文件专门用于创建整个路由器
import VueRouter from 'vue-router';
import About from '@/components/About.vue';
import Home from '@/components/Home.vue';

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
        },
    ],
});