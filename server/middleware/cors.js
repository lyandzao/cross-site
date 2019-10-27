const CORS_CONFIG = require('../config/cors_config');
module.exports = function(options) {
  //options处理

  return async (ctx, next) => {
    //逻辑
    const {
      ALLOW_ORIGIN,
      CREDENTIALS,
      HEADERS,
      ALLOW_METHODS
    } = CORS_CONFIG.CROS;
    ctx.set('Access-Control-Allow-Origin', ALLOW_ORIGIN);
    ctx.set('Access-Control-Allow-Credentials', CREDENTIALS);
    ctx.set('Access-Control-Allow-Headers', HEADERS);
    ctx.set('Access-Control-Allow-Methods', ALLOW_METHODS);
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200;
    } else {
      await next();
    }
  };
};
