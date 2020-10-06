// +----------------------------------------------------------------------
// | 广西西途比网络科技有限公司 www.c2b666.com
// +----------------------------------------------------------------------
// | 功能描述: 搜索页面
// +----------------------------------------------------------------------
// | 时　　间: 2019/10/07 11:35
// +----------------------------------------------------------------------
// | 代码创建: 侯武昌 <741809485@qq.com>
// +----------------------------------------------------------------------
// | 版本信息: V1.0.0
// +----------------------------------------------------------------------
// | 代码修改:（修改人 - 修改时间）
// +----------------------------------------------------------------------
// import Search from '../../api/search.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchApi: null, // api变量
    dataArray: [], // 数据
    page: 1, // 页码
    more: false, // 到底提示
    scrollHeight: 0, // 滚动区域高度
    topNum: 0, // 回到顶部标识
    search: '', // 搜索内容
    iconShow: false, // 输入框清空图标显示
    notShow: false,// 无数据显示
    tabs: ["课程","资源","活动","资讯"],
    listContent: [1,2,3,4],
    listActivity: [1, 2, 3, 4],
    leftArr: [20, 170, 320, 470],
    current: 0
  },
  // 点击切换
  tabClick: function (e) {
    this.setData({
      current: e.target.dataset.index,
      left: this.data.leftArr[e.target.dataset.index],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let keyword = '',
      iconShow = false;
    if (options.keyword) {
      keyword = options.keyword;
      iconShow = true;
    }
    let that = this,
      height = 0;
    wx.createSelectorQuery().select('.search-head').boundingClientRect().exec(function(res) {
      height = res[0].height + 1;
      // 获取屏幕高度
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            scrollHeight: res.windowHeight - height,
          });
        }
      });
    })
    

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },
  // 获取滚动条当前位置
  scrolltoupper: function(e) {
    if (e.detail.scrollTop > 210) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  // 回到顶部
  goTop: function(e) {
    this.setData({
      topNum: this.data.topNum = 0
    });
  },

  catchTouchMove(){
    return
  },
  // 搜索输入事件
  onSearch(e) {
    let value = e.detail.value,
      icon = false;
    if (value) {
      icon = true;
    }
    this.setData({
      iconShow: icon,
      search: value
    })
    if (!icon){
      this.loadData(1);
    }
  },
  // 搜索输入法完成事件
  confSearch(e) {
    if (this.data.search != '') {
      this.loadData(1);
    }
  },
  // 清空搜索框事件
  emptys() {
    this.setData({
      iconShow: false,
      search: ''
    })
    this.loadData(1);
  },
  // 搜素框失去焦点
  onblur() {
    if (this.data.search!=''){
      this.loadData(1);
    }
  },

  // 滚动加载数据
  // loadData(e) {
  // }


})