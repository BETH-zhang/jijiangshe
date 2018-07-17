const createApp = require('./create-app')
const init = require('./init');

async function start() {
  try {
    await init();
    console.log('Init success')

    // 一切就绪，最后启动服务
    const app = createApp()
    app.listen(CFG.port)
    console.log(`Listening on port ${CFG.port}`)
  }
  catch (e) {
    console.trace(e)
    process.exit(1)
  }
}

start()
