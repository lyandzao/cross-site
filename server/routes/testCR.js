const Router = require('koa-router');
const router = new Router();

//简单get接口
router.get('/testGet', async ctx => {
  ctx.body = {
    msg: '跨域资源'
  };
});
module.exports = router.routes();