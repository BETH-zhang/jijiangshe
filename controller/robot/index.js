'use strict'
const https = require('https')

// curl -X POST 'https://oapi.dingtalk.com/robot/send?access_token=d0639cd0371f36546f91009c39d9c1fd83130f206aff3826a7a28d64d00b4523' -H 'Content-Type':' application/json' -d '{ "msgtype":"text", "text"':' { "content"':' "【自动消息】【小程序】语法老师 发布完成，请测试线上主干流程。" } }'
const notify = (data) => {
  const postData = JSON.stringify(data)
  // console.log('postData: ', postData)
  https.request({
    hostname: 'oapi.dingtalk.com',
    path: '/robot/send?access_token=d0639cd0371f36546f91009c39d9c1fd83130f206aff3826a7a28d64d00b4523',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }).write(postData)
}

const text = {
  "msgtype": "text", 
  "text": {
      "content": "【自动消息】我就是我, 是不一样的烟火@156xxxx8827"
  }, 
  "at": {
      "atMobiles": [
          "156xxxx8827", 
          "189xxxx8325"
      ], 
      "isAtAll": false
  }
}

const link = {
  "msgtype": "link", 
  "link": {
      "text": "【自动消息】这个即将发布的新版本，创始人xx称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？", 
      "title": "时代的火车向前开", 
      "picUrl": "", 
      "messageUrl": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI"
  }
}

const markdown = {
  "msgtype": "markdown",
  "markdown": {
      "title":"杭州天气",
      "text": "【自动消息】#### 杭州天气 @150XXXXXXXX \n> 9度，西北风1级，空气良89，相对温度73%\n> ![screenshot](https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png)\n> ###### 10点20分发布 [天气](https://www.dingalk.com) \n"
  },
   "at": {
       "atMobiles": [
           "150XXXXXXXX"
       ],
       "isAtAll": false
   }
}

const feedCard = {
  "feedCard": {
      "links": [
          {
              "title": "【自动消息】时代的火车向前开", 
              "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
              "picURL": "https://www.dingtalk.com/"
          },
          {
              "title": "时代的火车向前开2", 
              "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
              "picURL": "https://www.dingtalk.com/"
          }
      ]
  }, 
  "msgtype": "feedCard"
}

const TYPE = {
  text,
  link,
  markdown,
  feedCard
}

exports.sendNodify = async (ctx) => {
  const type = ctx.request.query.type;
  notify(TYPE[type || 'text'])

  ctx.body = { code: 1 }
}