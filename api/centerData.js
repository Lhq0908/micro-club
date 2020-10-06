import Api from '../lib/api.js'
export default class CenterData extends Api {
  // 获取地区
  regions(data) {
    return this.post('wxapp/farming_manager/getAreas', data);
  }
}