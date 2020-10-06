// modules/classroom/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["推荐", "分类", "分类", "分类", "分类", "分类", "分类", "分类", "分类", "分类", "分类", "分类", "分类", "分类"],
    list:[
      { ititle: "姓名", sunm: "999", itex: "介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介...介...", img:'../../../assets/classroom/timg.png'},
      { ititle: "姓名", sunm: "999", itex: "介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介...介...", img: '../../../assets/classroom/timg.png' },
      { ititle: "姓名", sunm: "999", itex: "介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介...介...", img: '../../../assets/classroom/timg.png' },
      { ititle: "姓名", sunm: "999", itex: "介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介...介...", img: '../../../assets/classroom/timg.png' },
      { ititle: "姓名", sunm: "999", itex: "介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介...介...", img: '../../../assets/classroom/timg.png' },
    ],
    leftArr: [60, 240],
    current:0,
    value:''
  },
  /* 生命周期函数--监听页面初次渲染完成 */
  onReady: function () {
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

  /* 生命周期函数--监听页面显示 */
  onShow: function () {

  },
  tabClick:function(e){
    this.setData({
      current: e.target.dataset.index,
      // left: this.data.leftArr[e.target.dataset.index],
    })
  },
  swiperChange:function(){
    this.setData({
      current: e.detail.current,
      left: this.data.leftArr[e.detail.current],
    })
  },
  // 截获竖向滑动
  catchTouchMove: function (res) {
    return false
  },
  // 获取搜索框里的内容
  bindKeyInput:function(e){
    this.setData({
      value: e.detail.value
    })
  },
  // 清空搜索框
  empty:function(){
    this.setData({
      value:''
    })
  }
})