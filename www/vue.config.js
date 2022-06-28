// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...

    // 开发环境
    devServer: {
        proxy: {
            // 代理的标识， 告诉 node， url 前面是 api的就是需要代理的
            "/api": {
                // 目标地址，一般指后端服务器地址
                target: "http://localhost:3000",

                // 是否允许跨域
                changeOrigin: true,

                // 重写实 际RequestUrl中的'/api'用""代替， 因为我们后端接口没有api
                pathRewrite: {
                    // 我们请求url为：'/api/getNmae'话的，经过http-proxy-middleware的代理服务器时候改成'/getName',然后代理到 target 目标地址
                    "^/api": "",
                },
            },
        },
    },
}