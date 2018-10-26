function getdongtai(callback){
  dd.httpRequest({
    url: 'https://www.zmail.pub/software/xcxServer/cnereate/index.php/WeApi/index_trdnes',
    method: 'POST',
    data: {
      'art_class': '获取所有动态'
    },
    dataType: 'json',
    success: callback
  
  });
 
}
//获取用户信息接口
function ff(callback, code){
  dd.httpRequest({
    url: 'https://www.zmail.pub/software/cxwdingtalk/index.php/Api/Login/authlogin',
    method: 'POST',
    data: {
      code: code
    },
    dataType: 'json',
    success: callback

  });
}
//存用户设备接口
function jj(callback,sysinfo,uid) {
  dd.httpRequest({
    url: "https://www.zmail.pub/software/cxwdingtalk/index.php/Api/Login/getPhone",
    method: 'POST',
    data: {
      uid: uid,
      platform: sysinfo.platform,
      brand: sysinfo.brand,
      model: sysinfo.model,
      version: sysinfo.version,
      storage: sysinfo.storage,
      system: sysinfo.system
    },
    dataType: 'json',
    success: callback

  });

}

function sendMessage(callback,cid) {
  dd.getAuthCode({

    success: (res) => {
     
      let code = res.authCode
      dd.httpRequest({
        url: 'https://oapi.dingtalk.com/gettoken?appkey=dingb80rghbxckkpbeox&appsecret=aQwdZNk9fRe5AeL9_0vBe3rx452GhHkF83D1VCabABChBgJq7OWkZquQr9PZocV-',
        method: 'GET',
        data: {

        },
        dataType: 'json',
        success: function(res) {
 
          let access_token=res.data.access_token
          dd.httpRequest({
            url: 'https://oapi.dingtalk.com/user/getuserinfo?access_token='+access_token+'&code='+code,
            method: 'GET',
            data: {
             
            },
            dataType: 'json',
            success: function(res){
             let userid = res.data.userid;
             console.log(cid)
              dd.httpRequest({
                url: 'https://oapi.dingtalk.com/message/send_to_conversation',
                method: 'POST',
                data: {
                 sender:userid,
                 cid:cid,
                  msg: {
                    "msgtype": "text",
                    "text": {
                      "content": "张三的请假申请"
                    }
                  }
                },
                dataType: 'json',
                success: callback

              });

            }
    
          });
        }

      });

    },
    fail: (err) => {
      dd.alert({ content: JSON.stringify(err) })
    }
  })
  
}

function payfor (callback){
  dd.httpRequest({
    url: 'http://zmail.pub/cner/lh/aop/zhifu.php',
    method: 'POST',
    data: {
     
    },
    dataType: 'json',
    success: callback

  });
}

function payin(callback) {
  dd.httpRequest({
    url: 'https://www.zmail.pub/software/cxwdingtalk/index.php/Api/Payment/payOrder',
    method: 'POST',
    data: {

    },
    dataType: 'json',
    success: callback

  });
}
module.exports = {
  getdongtai,
  ff,
  jj,
  payfor, 
  sendMessage,
  payin
}
