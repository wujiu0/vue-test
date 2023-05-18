// 该文件专门用于创建整个路由器
import VueRouter from 'vue-router';
import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import Message from '@/pages/Message.vue';
import News from '@/pages/News.vue';
import Detail from '@/pages/Detail.vue';

const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {
                title: '关于',
            },
        },
        {
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    path: 'message',
                    component: Message,
                    meta: {
                        title: '信息',
                    },
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},
                            beforeEnter(to, from, next) {
                                console.log('独享路由守卫', to, from);
                                if (to.meta.isAuth) {
                                    console.log('require Auth');
                                    if (localStorage.getItem('user') === 'wujiu') {
                                        next();
                                    } else {
                                        alert('没有权限访问');
                                    }
                                } else {
                                    next();
                                }
                            },
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title,
                                };
                            },
                        },
                    ],
                },
                {
                    path: 'news',
                    component: News,
                    meta: {
                        title: '新闻',
                    },
                },
            ],
        },
    ],
});

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('全局前置路由守卫', to, from);
    next();
});
router.afterEach((to, from) => {
    console.log('全局后置路由守卫', to, from);
    document.title = to.meta.title || '路由系统—伍玖';
});
export default router;