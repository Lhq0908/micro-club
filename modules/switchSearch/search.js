Page({

  /**
   * 页面的初始数据
   */
  data: {
    popularList: ['南宁', '上海', '深圳', '成都', '南宁', '上海', '深圳', '成都'],
    cityList: [{
        index: 'A',
        cityArray: ['城市', '城市', '城市', '城市']
      },
      {
        index: 'B',
        cityArray: ['城市', '城市', '城市']
      }
    ],
    flag: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  bindChangeProperty: function(e) {
    console.log(e.detail.value);
    if (e.detail.value) {
      this.setData({
        flag: true
      })
    } else {
      this.setData({
        flag: false
      })
    }
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