export default function() {
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];  
  this.__page = curPage;
  Object.assign(curPage, {
    authDialogShow: function() {
      this.setData({
        '_authdialog_.isShow': true
      });
    },
    authDialogHide: function() {      
      this.setData({
        '_authdialog_.isShow': false
      });
    }
  });
  curPage.setData({
    '_authdialog_.isShow': false
  });
  return this;
}