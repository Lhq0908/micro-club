Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    search: '',
    editOpen: false,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取屏幕高度
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 60
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  // 点击切换
  tabClick: function(e) {
  },
  // 截获竖向滑动
  catchTouchMove: function(res) {
    console.log(2)
    return false
  },
  // 搜索
  getSearch(e) {
    this.setData({
      search: e.detail.value
    })
  },
  // 清空搜索
  empty() {
    this.setData({
      search: ''
    })
  },
  previewImage: function(event) {
    let current = event.currentTarget.dataset.src;
    console.log(current, event, 77777)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.img // 需要预览的图片http链接列表
    })
  },
  edit: function(e){
    console.log("点了编辑")
    this.setData({ editOpen: !this.data.editOpen});
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})