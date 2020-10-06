import Auth from '../../api/auth.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authApi:null,
    imgUrls: [
      '../../assets/index/banner.png',
      '../../assets/index/banner.png',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    // 获取搜索内容
    search:''
  },
  /**
   * +
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.authApi = new Auth();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  bindKeyInput:function(e){
    this.setData({
      search: e.detail.value
    })
  },
  // 清空搜索框
  empty:function(){
    this.setData({
      search:''
    })
  }
})
