const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    // 开启代理服务器(方式一
    /*devServer: {
        proxy: 'http://localhost:5000',
    },*/
    // 开启代理服务器(方式二
    devServer: {
        proxy: {
            '/students': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true,
            },
            '/demo': {
                target: 'http://localhost:5001',
                ws: true,
                changeOrigin: true,
                pathRewrite: {'^/demo': ''},
            },
        },
    },
});
