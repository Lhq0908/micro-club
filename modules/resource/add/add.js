// modules/resource/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 图片上传
   upload(e) {
     var that = this;
     let index = e.currentTarget.dataset.index;
     wx.chooseImage({
       count: 1,
       sizeType: ['compressed'],
       sourceType: ['album', 'camera'],
       success(res) {
         var tempFilesSize = res.tempFiles[0].size;
         if (tempFilesSize <= 900000) {
         } else {
           wx.showToast({
             title: '不能上传大于1MB的图片哟~',
             icon: 'none',
             duration: 2000
           })
         }

       }
     })
   },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
