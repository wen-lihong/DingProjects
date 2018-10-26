
var casedata = require('./../../../utils/caseData.js');

Page({

  data:{
    caseData:''
   
  },
  onLoad(query) {
    // 页面加载
   
    let caseData = casedata.caseDataArray
    let cased = caseData.slice(6,12)
   this.setData({
     caseData: cased
      
    })
    
    console.log(this.data.caseData)



  },
  ddt(e){
   let id = e.currentTarget.dataset.index
   dd.navigateTo({
     url:'./butiful/butiful?index='+id
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
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
