// 导入vue
import Vue from 'vue';
// 导入App
import App from '@/App.vue';
// 关闭生产提示
Vue.config.productionTip = false;
// 创建Vue实例，添加App组件，绑定至app容器
new Vue({
    //render函数完成了这个功能：将App组件放入容器中
    render: createElement => createElement(App),
}).$mount('#app');
/*
	关于不同版本的Vue：

		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/