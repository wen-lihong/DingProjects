 var app = getApp();
 var utils = require('./../../utils/api.js')
Page({

  data:{
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
  imgData :[
     './../../images/t01.jpg',
     './../../images/t02.jpg',
    './../../images/t03.jpg'
  ]
  },
  onLoad(query) {
    console.log(1111)
    utils.getdongtai((res)=>{
      app.globalData.datal=res.data.data;
      console.log(res.data.data)
     
      this.setData({
        datal: app.globalData.datal
      })
    })
   

    // 页面加载
   
  },
  tapCon(e){
   console.log(e)
    let index = e.currentTarget.dataset.index;
    dd.navigateTo({
      url:"./../dynamic/details/details?indexm="+index
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
