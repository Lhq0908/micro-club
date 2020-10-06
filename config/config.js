const config = {
  // 应用调试模式
  debug: true,
  // 接口 APP ID
  appId: 'client',
  // 接口 APP SECRET
  appSecret: 'client-secret',
  // 正式环境接口地址
  baseApi: 'https://ad.syd666.com/',
  // 开发环境接口地址
  debugApi: 'http://localhost:9527/',
  // 获取token地址
  tokenApi: 'oauth/token',
  // Oauth2 地址
  authApi: 'oauth/miniapp',
  // 获取微信登录信息
  wxLoginApi: 'webapp/public/miniappLogin',
}
export default config;