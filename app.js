import config from 'config/config.js'
import AuthDialog from 'utils/wxApi/component/authDialog.js'
//app.js
App({
  showAuth: AuthDialog,
  onLaunch: function() {
    // 客户端授权
    // let baseApi = config.debug ? config.debugApi : config.baseApi;
    // let base64 = new Utils.Base64();
    // const header = base64.encode(config.appId + ':' + config.appSecret);
    // let _this = this;
    // wx.request({
    //   method: 'POST',
    //   url: baseApi + config.tokenApi,
    //   data: {
    //     grant_type: 'client_credentials',
    //     scope: 'all'
    //   },
    //   header: {
    //     'Authorization': 'Basic ' + header,
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success(response) {
    //     if (response.statusCode == 200) {          
    //       _this.globalData.token.access_token = response.data.access_token;
    //     } else {
    //       wx.showToast({
    //         title: '客户端授权失败',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     }
    //   },
    //   fail(e) {
    //     console.log('服务器异常');
    //   }
    // })
  },
  globalData: {
    isLogin: false,
    userInfo: {},
    token: {
      access_token: '',
      refresh_token: ''
    },
    CONFIG: config
  }
})