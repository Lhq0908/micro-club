
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["进行中", "已结束"],
    search:'',
    current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取屏幕高度
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight - 55
        });
      }
    });
  },
  // 点击切换
  clickTab: function (e) {
    let that = this;
    if (this.data.current === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        current: e.target.dataset.current
      })
    }
  },
  // 截获竖向滑动
  catchTouchMove: function (res) {
    return false
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
// 获取搜索框里的内容
  bindKeyInput:function(e){
    this.setData({
      search:e.detail.value
    })
  },
  // 清空搜索框
  empty:function(){
    this.setData({
      search:'' 
    })
  }
})