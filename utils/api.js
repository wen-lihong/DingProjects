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

module.exports = {
  getdongtai
}
