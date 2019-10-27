//实例化koa和中间件
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const getMethods = require('../routes/testCR2');
const postMethods = require('../routes/testCRP');

//使用中间件
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
router.use('/get', getMethods);
router.use('/post', postMethods);

//配置端口
const port = process.env.PORT || 30000;
app.listen(port, () => {
  console.log('server2 on');
});
