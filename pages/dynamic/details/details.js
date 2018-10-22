 var app = getApp();
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
    let index = query.indexm
  
    this.setData({
      datal: app.globalData.datal[index]
    })
  
    // 页面加载

  
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
