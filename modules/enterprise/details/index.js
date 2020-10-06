// modules/enterprise/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { title: "行业：", explain: '服务业' },
      { title: "主营：", explain: '境内旅游、入境旅游、旅游商品开发与销售、          旅游宣传促销策划、旅游消息咨询等' },
      { title: "电话：", explain: '0771-8888888' },
      { title: "邮箱：", explain: '123456789@qq.com' },
      {
        title: "地址：", explain: '南宁市西乡塘区友爱北路26号大洋百货购物广场3楼'
      },
    ],
    imgUrls: [
      {
        title: "关于我们", img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', explain: '团结合作'
      },
       {
        title: "关于团结", img: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', explain: '团结合作'
      }, {
        title: "关于合作", img: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', explain: '团结合作'
      }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    height: 539,
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