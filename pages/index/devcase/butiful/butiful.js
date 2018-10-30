  var api = require('./../../../../utils/api.js');
var app = getApp();
var casedata = require('./../../../../utils/caseData.js')
Page({

  data:{
    buysure:false,
    paying: false
  },
  onLoad(query) {
    let id = query.index;
    let caseData = casedata.caseDataArray[id];
    this.setData({
      caseData: caseData 
    })
   
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
  //下单
   let info={};
    info.uid = app.globalData.userInfo.uid
    // info.price = this.data.caseData.thisModulePrice
    info.price = 0.01
    info.title = this.data.caseData.caseName
    api.paydd((call)=>{
   
      let oder= call.data.info
      app.globalData.userInfo.oder=oder;
      oder.uid = app.globalData.userInfo.uid
      api.payin((res)=>{
        this.setData({
          paying: true
        })
       let ink = res.data.info
        dd.pay({
          info: ink, // 订单信息
          success: res => {
           console.log(res)
           if(res.result){
            dd.alert({
              content: "付款成功"
            })
           }
          else{ dd.alert({
              content: "付款失败"
            })
          }
          },
          fail: err => {
            dd.alert({
              content: JSON.stringify(ink)

            })
          }
          
        })
        this.setData({
          paying:false
        })
        this.setData({
          buysure: false
        })
      },oder)

    },info)
   
  
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
