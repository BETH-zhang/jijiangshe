const serviceName = 'qiuge.me'; // 服务的名字，必选不能省

module.exports = {
  serviceName: serviceName,
  port: 8080,
  "db": {
    "database": "",
    "user": "",
    "password": "",
    "options": {
      "host": "",
      "port": "",
      "dialect": "postgres"
    }
  },
}