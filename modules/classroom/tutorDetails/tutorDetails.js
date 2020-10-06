// modules/classroom/tutorDetails/tutorDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFolded: true,
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
  change: function (e) {
    this.setData({
      isFolded: !this.data.isFolded,
    })
  }

})