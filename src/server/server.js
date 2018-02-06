const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

router.get('/api/hello', (ctx, next) => {
    return ctx.body = 'hi';
});

server.use(router.routes());
server.use(router.allowedMethods());

if (process.env.NODE_ENV !== 'production') {

    // proxy to webpack-dev-server
    const proxy = require('koa-proxy');
    server.use(proxy({ host: 'http://localhost:8080' }));
}

server.listen(8181);

