import CenterData from '../../api/centerData'
Component({
  properties: {
    regionShow: {
      type: Boolean,
      value: false
    },
    cannot: {
      type: Boolean,
      value: true
    },
    receive: {
      type: Boolean,
      value: false,
    }
  },
  data: {
    // 区域联动
    provinceShow: false,
    cityShow: true,
    areaShow: true,
    //1
    province: '请选择',
    provinces: '',
    //2
    city: '',
    citys: '',
    //3
    area: '',
    areas: '',
    keys: 3,
    left: 0,
    maxLeft: 0,
    minCityId: '',
    regionShow: false,
    receive: false,
    names: '',
    // 所选择的区域id
    oneKeys: '',
    twoKeys: '',
    threeKeys: '',
  },
  ready: function() {
    //----------第一级地区----------
    (new CenterData({
      isLogin: false,
      showLoading: false,
    })).regions({
      parentCode: 0
    }).then((data) => {
      this.setData({
        provinces: data.result,
      })
    })
  },
  methods: {
    // --------根据keys获取下级区域数据-------
    takeData(id, keys) {
      console.log(id,"id");
      (new CenterData({
        isLogin: false,
      })).regions({
        parentCode: id
      }).then((data) => {
        if (keys == 1) {
          this.setData({
            citys: data.result,
          })
        } else if (keys == 2) {
          this.setData({
            areas: data.result,
          })
        } else if (keys == 3) {
          this.setData({
            countys: data.result,
          });
        }


      })
    },
    //----------------------------------
    //------type==del删除提示窗口、type==address三级联动--------
    show(e) {
      let types = e.currentTarget.dataset.type;
      if (!this.data.cannot & this.data.minCityId == '') {
        wx.showToast({
          title: '请先选择区域',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      if (types == "address") {
        this.setData({
          regionShow: false
        })
      };
      // 确定发送父组件参数
      this.triggerEvent('changes', {
        regionShow: false,
      });
    },
    //----------三级联动确认操作------------
    confirm() {
      if (this.data.province == '请选择') {
        this.showToast('请选择省份', 'none', 2000);
        return;
      }
      if (this.data.city == '请选择') {
        this.showToast('请选择城市', 'none', 2000);
        return;
      }
      this.setData({
        regionShow: false,
      });
      // 确定发送父组件参数
      this.triggerEvent('change', {
        province: this.data.province,
        city: this.data.city,
        area: this.data.area,
        county: this.data.county,
        minCityId: this.data.minCityId,
        regionShow: false,
        names: this.data.names,
        oneKeys: this.data.oneKeys,
        twoKeys: this.data.twoKeys,
        threeKeys: this.data.threeKeys,
      });
    },
    //----------区域选择--------------
    choice(e) {
      console.log(e);
      let keys = e.currentTarget.dataset.index;
      let objKeys = e.currentTarget.dataset.key;
      let title = e.currentTarget.dataset.title;
      let names = e.currentTarget.dataset.name;
      console.log(objKeys,"objKeys");
      if (keys == 0) {
        this.takeData(objKeys, 1);
        this.setData({
          city: '请选择',
          province: title,
          oneKeys: objKeys,
          area: '',
          names: names,
          keys: 4,
          left: 33,
          provinceShow: true,
          cityShow: false,
          areaShow: true,
        })
      }
      if (keys == 1) {
        this.takeData(objKeys, 2);
        this.setData({
          area: '请选择',
          city: title,
          twoKeys: objKeys,
          names: names,
          keys: 5,
          left: 66,
          provinceShow: true,
          cityShow: true,
          areaShow: false,
        })
      }
      if (keys == 2) {
        this.takeData(objKeys, 3);
        this.setData({
          threeKeys: objKeys,
          area: title,
          names: names,
          keys: 5,
          left: 66,
          provinceShow: true,
          cityShow: true,
          areaShow: false,
        })
      }

      if (keys == 3) {
        this.setData({
          provinceShow: false,
          cityShow: true,
          areaShow: true,
          keys: 3,
          left: 0,
        })
      }
      if (keys == 4) {
        this.setData({
          provinceShow: true,
          cityShow: false,
          areaShow: true,
          keys: 4,
          left: 33,
        })
      }
      if (keys == 5) {
        this.setData({
          provinceShow: true,
          cityShow: true,
          areaShow: false,
          keys: 5,
          left: 66,
        })
      }

      

    },
    showToast(title, icon, duration) {
      wx.showToast({
        title: title,
        icon: icon,
        duration: duration
      })
    }

  }
});