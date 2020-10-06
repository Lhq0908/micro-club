// modules/classroom/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authApi: null,
    imgUrls: [
      '../../../assets/index/banner.png',
      '../../../assets/index/banner.png',
    ],
    
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    value:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 获取搜索框内容
  bindKeyInput: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  // 删除搜索框里的内容
  empty:function(){
      this.setData({
        value:''
      })
  }
})