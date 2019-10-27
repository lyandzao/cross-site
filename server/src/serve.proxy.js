//实例化koa和中间件
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const proxy = require('koa-server-http-proxy');
const cors = require('../middleware/cors');

const app = new Koa();
const router = new Router();

//使用中间件
app.use(cors())
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const proxyTable = {
  '/get1': {
    target: 'http://127.0.0.1:3000',
    pathRewrite: { '^/get1': '' },
    changeOrigin: true
  },
  '/get2': {
    target: 'http://127.0.0.1:30000',
    pathRewrite: { '^/get2': '' },
    changeOrigin: true
  }
};

Object.keys(proxyTable).forEach(context => {
  var options = proxyTable[context];
  app.use(proxy(context, options));
});


//配置端口
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('server on');
});
