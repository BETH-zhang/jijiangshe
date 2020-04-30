#!/bin/sh

curl -X POST 'https://oapi.dingtalk.com/robot/send?access_token=d0639cd0371f36546f91009c39d9c1fd83130f206aff3826a7a28d64d00b4523' -H 'Content-Type':' application/json' -d '{ "msgtype":"text", "text"':' { "content"':' "【自动消息】【小程序】语法老师 发布完成，请测试线上主干流程。" } }'