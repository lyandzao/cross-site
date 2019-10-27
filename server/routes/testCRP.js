const Router = require('koa-router');
const router = new Router();

//post
router.post('/testPost', async ctx => {
  ctx.status = 200;
  ctx.body = {
    msg: '跨域资源P'
  };
});

module.exports = router.routes();
