// modules/classroom/classDetails/classDetails.js
Page({
      
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
     '../../../assets/classroom/haed.png',
       '../../../assets/classroom/haed.png',
      '../../../assets/classroom/haed.png',
      '../../../assets/classroom/haed.png'
    ],
    dianzan:true,
    stars:true
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
  imgYu:function(event){
    
    var src = event.currentTarget.dataset.src; // 获取data-src
    var imgList = event.currentTarget.dataset.list;// 获取data-list;
    console.log(src, imgList);
    // 图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }
 
})