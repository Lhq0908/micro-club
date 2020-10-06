// modules/core/logon/enterprise/enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 区域三级联动
    regionShow:true,
    address:''
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
  onShow: function (e) {
    this.setData({
      // regionShow: e.detail.regionShow,
    })
  },
  // 三级联动子组件回调参数
  onChange(e) {
    this.setData({
      regionShow: e.detail.regionShow,
      address: e.detail.province + ' ' + e.detail.city + ' ' + e.detail.area,
      areaCode1: e.detail.oneKeys,
      areaName1: e.detail.province,
      areaCode2: e.detail.twoKeys,
      areaName2: e.detail.city,
      areaCode3: e.detail.threeKeys,
      areaName3: e.detail.area,
    })
  },
  // 三级联动
  show:function(){
    this.setData({
      regionShow: true
    })
  }
})