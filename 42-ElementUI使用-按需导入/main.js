import Vue from 'vue';
import App from './App.vue';
// // 引入Element UI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// // 应用ElementUI
// Vue.use(ElementUI);
// 按需引入
import {Button, Row, Select} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
new Vue({
    render: h => h(App),
}).$mount('#app');
