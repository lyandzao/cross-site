//实例化koa和中间件
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router()
const getMethods = require('../routes/testCR')
const postMethods = require('../routes/testCRP')

//使用中间件
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
router.use('/get',getMethods);
router.use('/post',postMethods);
app.use(async ctx => {
  ctx.body='hello'
})

//配置端口
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server on');
});
