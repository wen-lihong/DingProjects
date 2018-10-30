 var app = getApp();
 var utils = require('./../../utils/api.js')
Page({

  data:{
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    systemInfo:{
      uid:""
    },
  imgData :[
     './../../images/t01.jpg',
     './../../images/t02.jpg',
    './../../images/t03.jpg'
  ]
  },

  onLoad(query) {
    var that=this
   //获取头条资讯
    utils.getdongtai((res)=>{
      app.globalData.datal=res.data.data;
      that.setData({
        datal: app.globalData.datal
      })
    })
    this.getii()
    this.getSystemInfoPage()
   
  },
  
  getSystemInfoPage() {
    var that = this
    dd.getNetworkType({
      success: (res) => {
        that.setData({
          networkType: res.networkType
        });
      }
    });


  },

  getii(){
    var that=this;
    //获取AuthCode
    dd.getAuthCode({
  
      success: (res) => {
       
        let code = res.authCode
        utils.ff((res) => {
          let uid = res.data.info.suid
          app.globalData.userInfo.uid=uid
          this.potsysinfo(uid)
        }, code)
       
      },
      fail: (err) => {
        dd.alert({ content: JSON.stringify(err) })
      }
    })
  },

  potsysinfo(uid){
    //获取用户设备信息
    dd.getSystemInfo({
      success: (res) => {
        
        this.setData({
          systemInfo: res
        })
        
        let sysinfo = this.data.systemInfo
        utils.jj((callback) => {
         
        }, sysinfo,uid)
      }
    })
  },
  tapCon(e){
   
    let index = e.currentTarget.dataset.index;
    dd.navigateTo({
      url:"./../dynamic/details/details?indexm="+index
    })
  },
  cancle(){

    // dd.chooseChatForNormalMsg({
    //   isConfirm: 'true', //是否弹出确认窗口，默认为true
    //   success: res => {
    //     // 该cid和服务端开发文档-普通会话消息接口配合使用，而且只能使用一次，之后将失效
    //     /*{
    //         cid: 'xxxx',
    //         title:'xxx'
    //     }*/
    //     let cid= res.cid
    //     console.log(res.title)
    //     utils.sendMessage((res) => {
         
    //     }, cid)
    //   },
    //   fail: err => {
    //     dd.alert({
    //       content: JSON.stringify(err)
    //     })
    //   }
    // })
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

  formSub(e) {
    // 通过e.detail.formId可以获取到推送消息的临时授权码code
    console.log(e.detail.formId)
    dd.httpRequest({
      url: 'http://zmail.pub/cner/lh/zhipay/zhi.php?code=' + e.detail.formId,
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      data: {
      },
      dataType: 'json',
      success: function(res) {
        if (res.data.success) {
          dd.alert({ content: 'form表单提交处理成功' });
        } else {
          dd.alert({
            title: "form表单提交处理失败",
            content: JSON.stringify(res)
          });
        }
      },
      fail: function(res) {
        dd.alert({ content: 'form表单提交处理' });
      }
    });
  }
});
