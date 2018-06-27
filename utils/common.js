// 通过req的hearers来获取客户端ip  
exports.getIp = function(req) {  
  var ip = req.headers['x-real-ip'] ||  
      req.headers['x-forwarded-for'] ||  
      req.socket.remoteAddress || '';  
  if(ip.split(',').length>0){  
      ip = ip.split(',')[0];  
  }  
  return ip;  
};

// 校验手机号
exports.isPhone = function(value) {
  const notNullValue = value || '';
  const phone = notNullValue.replace(/(^\s+)|(\s+$)/g, '');
  if (/^0?1[0-9]\d{9}$/.test(phone)) {
    return undefined;
  }
  return '手机格式不正确';
};

// 校验名字
exports.isName = function(value) {
  const notNullValue = value || '';
  const name = notNullValue.replace(/(^\s+)|(\s+$)/g, '');
  const pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）;—|{}【】‘；：”“'。，、？]");
  if (!pattern.test(name)) {
    return undefined;
  }
  return '名字只能是汉字字母或数字';
}
