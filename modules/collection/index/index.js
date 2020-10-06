// modules/collection/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["活动", "课程", "资源", "资讯"],
    current: 0,
    list: [{
      id: '0',
      title: '标题标题标题标题标题标题'
    }],
    count: '', //总体数目
    electCount: '', //选择数目
    checked: false,
    hiddenName: true,
    img: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570515974919&di=39751adf0655f91cef31bd0b11faa682&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20140731%2Fqinghaihuyuanjing_2820969.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570516076041&di=d07811ac0e5a18e08bca8595ed9feed9&imgtype=0&src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F201411%2F23%2F165629kj32yreyfykjr3za.jpg'],

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
          scrollHeight: res.windowHeight - 55
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
    this.setData({
      current: e.target.dataset.index,
    })
  },
  // 截获竖向滑动
  catchTouchMove: function(res) {
    return false
  },
  del: function() {
    wx.showModal({
      confirmColor: '#4299ff',
      content: '您确定要删除这些收藏吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  manageClick: function(e) {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  // 点击图片放大
  previewImage: function(event) {
    let current = event.currentTarget.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.img // 需要预览的图片http链接列表
    })
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
