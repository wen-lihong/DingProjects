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
    
//     dd.getAuthCode({
//     success:(res)=>{
//         dd.alert({content: res.authCode})
      
//     },
//     fail: (err)=>{
//         dd.alert({content: JSON.stringify(err)})
//     }
// })
// cc((res)=>{
//   console.log(res)
// })
// function cc(callback){
//   dd.httpRequest({
// url: 'https://oapi.dingtalk.com/gettoken?appkey=dingb80rghbxckkpbeox&appsecret=aQwdZNk9fRe5AeL9_0vBe3rx452GhHkF83D1VCabABChBgJq7OWkZquQr9PZocV-',
//     method: 'GET',
//     data: {
     
//     },
//     dataType: 'json',
//     success: callback
  
//   });
//  console.log(callback)
// }



  },
  payfor(){
    console.log(111)
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
