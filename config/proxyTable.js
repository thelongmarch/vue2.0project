
module.exports = {
 testing:{
  '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
    target: 'http://www.testing.com:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
 },
 production:{
  '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
    target: 'http://www.prod.com:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
 },
 uat:{
  '/api': { //此处要与 /services/api.js 中的 API_PROXY_PREFIX 值保持一致
    target: 'http://www.uat.com:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
 },
}
