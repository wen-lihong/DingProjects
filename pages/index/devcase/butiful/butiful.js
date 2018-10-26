  var api = require('./../../../../utils/api.js');

var casedata = require('./../../../../utils/caseData.js')
Page({

  data:{
    buysure:false,
  },
  onLoad(query) {
    let id = query.index;
    let caseData = casedata.caseDataArray[id];
    this.setData({
      caseData: caseData 
    })
    console.log(this.data.caseData)
  },

  payopen(){
   this.setData({
     buysure:true
   })
  },
  payclose() {
    this.setData({
      buysure: false
    })
  },
  payfor() {
    this.setData({
      buysure:false
    })
  },
  evaluation(){
    dd.navigateTo({
      url:"./../evaluation/evaluation"
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  sharess(){
    this.onShareAppMessage()
  },
  onShareAppMessage() {
    return {
      title: '天天洗车模板',
      desc: '天天洗车模板只要999',
      path: "pages/index/devcase/butiful/butiful",
    }
  }
});
