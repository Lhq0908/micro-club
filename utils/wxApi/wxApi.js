export default class WxApi {

  constructor() {
  }

  // 检查用户权限
  checkPermission() {

  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      // 查看是否授权
      wx.getSetting({
        success: (res) => {       
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                resolve(res);
              }
            })
          } else {
            // 注入授权提示
            getApp().showAuth();
            // 设置授权事件
            // 关闭登录提示框
            let pages = getCurrentPages();
            let curPage = pages[pages.length - 1];
            // 显示授权询问
            curPage.authDialogShow();
            curPage.bindGetUserInfo = function(e) {              
              curPage.authDialogHide();
              if (e.detail.userInfo) {
                resolve(e.detail);
              } else {
                wx.showModal({
                  title: '温馨提示',
                  content: '拒绝获取用户信息将无法进行后续操作哦，前往设置打开用户信息~',
                  showCancel: false,
                  success: function(res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success: (res) => {
                          console.log("openSetting", res);
                        }
                      })
                    }
                  }
                })
              }
            }
          }
        }
      });
    });
  }

}