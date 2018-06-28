module.exports = {
  1: {
    status: 500,
    msg: '未知错误'
  },
  2: {
    status: 400,
    msg: '参数错误'
  },
  3: {
    status: 500,
    msg: '请求超时'
  },
  4: {
    status: 429,
    msg: '请求过于频繁'
  },

  // 自定义错误
  1001: {
    status: 400,
    msg: ''
  },
  1002: {
    status: 500,
    msg: 'Cannot find wechat config',
  }
}