import config from '../config/config'
import WxApi from '../utils/wxApi/wxApi.js'
import Utils from '../utils/util.js'
let globalData = getApp().globalData;

export default class Api {

  constructor(args) {
    this.args = {
      showLoading: true,
      beforeRequest: null,
      afterRequest: null,
      isLogin: false
    }
    this.baseApi = config.debug ? config.debugApi : config.baseApi;
    Object.assign(this.args, args);
  }

  get(api, params = {}) {
    return new Promise((resolve, reject) => {
      // 判断token是否存在
      if (this._hasToken()) {
        this._sendRequest(api, resolve, reject, params);
      } else {
        this._getToken(() => {
          // 继续后续请求                 
          this._sendRequest(api, resolve, reject, params);
        });
      }
    });
  }

  post(api, params = {}) {
    let _this = this;
    return new Promise((resolve, reject) => {
      // 判断token是否存在
      if (this._hasToken()) {
        this.clientCredentials(() => {
          this._sendRequest(api, resolve, reject, params, 'POST');
        });
      } else {
        this._getToken((res) => {
          // 继续后续请求                 
          this._sendRequest(api, resolve, reject, params, 'POST');
        });
      }
    });
  }

  // 客户端授权
  _getToken(callback) {
    const _this = this;
    let baseApi = config.debug ? config.debugApi : config.baseApi;
    let base64 = new Utils.Base64();
    const header = base64.encode(config.appId + ':' + config.appSecret);
    wx.request({
      method: 'POST',
      url: baseApi + config.tokenApi,
      data: {
        grant_type: 'client_credentials',
        scope: 'all'
      },
      header: {
        'Authorization': 'Basic ' + header,
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(response) {
        if (response.statusCode == 200) {
          // 设置token信息
          _this._setToken(response.data.access_token);
          callback();
        } else {
          wx.showToast({
            title: '客户端授权失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(e) {
        console.log('服务器异常');
      }
    })
  }


  put(api, params = {}) {
    let _this = this;
    return new Promise((resolve, reject) => {
      // 判断token是否存在
      if (this._hasToken()) {
        this._sendRequest(api, resolve, reject, params, 'PUT');
      } else {
        this._getToken((res) => {
          // 设置token信息
          this._setToken(res.data.result);
          // 继续后续请求                 
          this._sendRequest(api, resolve, reject, params, 'PUT');
        });
      }
    });
  }

  delete(api, params = {}) {
    let _this = this;
    return new Promise((resolve, reject) => {
      // 判断token是否存在
      if (this._hasToken()) {
        this._sendRequest(api, resolve, reject, params, 'DELETE');
      } else {
        this._getToken((res) => {
          // 设置token信息
          this._setToken(res.data.result);
          // 继续后续请求                 
          this._sendRequest(api, resolve, reject, params, 'DELETE');
        });
      }
    });
  }

  _hasToken() {
    // 判断已经登录
    if (globalData.isLogin) {
      return true;
    }
    // 判断是否存在 token 值       
    if (globalData.token.access_token != '') {
      return true;
    } else {
      return false;
    }
  }

  _setToken(token) {
    globalData.token.access_token = token;
  }

  _sendRequest(api, resolve, reject, params = {}, method = 'GET', again = true) {
    if (this.args.showLoading) {
      wx.showLoading({
        title: '请稍候'
      });
    }
    const _this = this;
    wx.request({
      url: this.baseApi + api,
      data: params,
      method: method,
      header: {
        authorization: 'Bearer ' + globalData.token.access_token,
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(result) {
        if (config.debug) {
          console.log('\n');
          console.log('###', '发起请求', '-------');
          console.log('API名称', _this.__proto__.constructor.name);
          console.log('请求接口', _this.baseApi + api);
          console.log('请求状态', result.statusCode);
          console.log('返回数据', result.data);
          console.log('###', '请求结束', '-------');
        }
        if (result.statusCode == 403) {
          if (again) {
            _this._wxLogin((cbData) => {
              _this._sendRequest(api, resolve, reject, params, method, false);
            });
          }
        } else {
          resolve(result.data);
        }
      },
      fail() {
        if (config.debug) {
          console.log('\n');
          console.log('###', '请求失败->', _this.baseApi + api);
          reject();
        }
      },
      complete() {
        wx.hideLoading();
      }
    });
  }


  // 微信登录
  _wxLogin(callback) {
    (new WxApi()).getUserInfo().then((data) => {
      wx.login({
        success: (loginRes) => {
          if (loginRes.code) {
            // 发送请求获取session_key          
            wx.request({
              method: 'POST',
              url: this.baseApi + config.wxLoginApi,
              data: {
                'code': loginRes.code
              },
              header: {
                authorization: 'Bearer ' + globalData.token.access_token,
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: sessionRes => {
                // 获得sessionKey 用户换取unionid/token
                const sessionKey = sessionRes.data.result.sessionKey;
                wx.getUserInfo({
                  success: (userInfoRes) => {
                    let base64 = new Utils.Base64();
                    const header = base64.encode(config.appId + ':' + config.appSecret);
                    wx.request({
                      method: 'POST',
                      url: this.baseApi + config.authApi,
                      header: {
                        'Authorization': 'Basic ' + header,
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      data: {
                        grant_type: 'miniapp',
                        scope: 'all',
                        sessionKey: sessionKey,
                        rawData: userInfoRes.rawData,
                        signature: userInfoRes.signature,
                        encryptedData: userInfoRes.encryptedData,
                        iv: userInfoRes.iv
                      },
                      success: res => {
                        const data = res.data;
                        globalData.token.access_token = data.result.access_token;
                        globalData.token.refresh_token = data.result.refresh_token;
                        globalData.isLogin = true;
                        console.log(globalData);
                        callback(res);
                      }
                    });
                  }
                })
              }
            });
          }
        }
      });
    })
  }

}