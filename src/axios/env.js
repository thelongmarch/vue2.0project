/**
 * 本地开发用代理转发
 * 线上版本用 baseUrl
 * routerMode: 路由模式
 *发版的时候的使用路径 
 */
/* 
 打包到测试环境: npm run build -- test
 打包到生产环境: npm run build -- prod
 内网：http://192.168.85.73:8761
 外网：http://192.168.85.73:8761
*/

let baseUrl

if (process.env.NODE_ENV === 'development') {
  baseUrl = ''
} else if (process.env.NODE_ENV === 'testing') {
    
  // baseUrl = 'http://58.213.190.99:19051/test/'
  baseUrl = 'http://anxingpark.test.cn/test/'

} else if (process.env.NODE_ENV === 'production') {
  
  // baseUrl = 'http://58.213.190.99:19051'
  baseUrl = 'http://anxingpark.prod.cn/'

}else if (process.env.NODE_ENV === 'uat'){
    baseUrl = 'http://anxingpark.uat.cn/'
}else{  
  // baseUrl = 'http://58.213.190.99:19051'
  baseUrl = 'http://anxingpark.dev.cn/'
}

export default baseUrl
