// +----------------------------------------------------------------------
// | 广西西途比网络科技有限公司 www.c2b666.com
// +----------------------------------------------------------------------
// | 功能描述: 搜索页面
// +----------------------------------------------------------------------
// | 时　　间: 2019/10/07 10:30
// +----------------------------------------------------------------------
// | 代码创建: 侯武昌 <741809485@qq.com>
// +----------------------------------------------------------------------
// | 版本信息: V1.0.0
// +----------------------------------------------------------------------
// | 代码修改:（修改人 - 修改时间）
// +----------------------------------------------------------------------
// import Search from '../../api/search.js'
Page({
  data: {
    historyCity: [],
    history: [],
    keyword: '',
    iconShow: false,
  },
  onLoad: function(options) {
    // 关键字列表
    // (new Search({ isLogin: false })).hotCity().then((data) => {
    //   if(data.code == 200){
    //     this.setData({
    //       // historyCity:data.result.records
    //     })
    //   }
    // })
  },
  // 清空输入内容操作
  emptyClick() {
    this.setData({
      keyword: '',
      iconShow:false,
    })
  },
  // 清空历史记录操作
  deleteClick: function() {
    let that = this;
    wx.showModal({
      content: '确认删除全部历史记录？',
      cancelColor: '#ff9c00',
      confirmColor: '#ff9c00',
      success(res) {
        if (res.confirm) {
          wx.setStorageSync('keyword', '');
          that.setData({
            history: [],
            keyword:'',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 搜索输入事件
  searchClock(e) {
    let iconShow = false;
    if (e.detail.value){
      iconShow = true;
    }
    this.setData({
      keyword: e.detail.value.replace(/^\s+|\s+$/g, ''),
      iconShow: iconShow,
    })
  },
  // 搜索跳转操作
  search() {
    wx.navigateTo({
      url: '/modules/search/search'
    })
  },
  // 点击搜索历史操作
  onHistory(e) {
    this.setData({
      keyword: e.currentTarget.dataset.value,
      iconShow: true,
    })
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
    let value = wx.getStorageSync('keyword');
    let iconShow = false;
    if (this.data.keyword){
      iconShow = true;
    }
    if (value) {
      value = JSON.parse(value);
      this.setData({
        history: value,
        iconShow: iconShow,
      })
    }
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