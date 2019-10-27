const Router = require('koa-router');
const router = new Router();

//处理了JSONP跨域
router.get('/testJSONP', async (ctx, next) => {
  const req = ctx.query;
  const data = {
    age: 20,
    name: 'zao',
    job: 'sudent',
    type: 'get',
    info: req || '没有参数'
  };
  ctx.body = `${req.callback}(${JSON.stringify(data)})`;
});

module.exports = router.routes();