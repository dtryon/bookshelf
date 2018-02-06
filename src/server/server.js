const Koa = require('koa');
const Router = require('koa-router');

const bookList = require('./booklist/data.json');

const server = new Koa();
const router = new Router();

const PORT = process.env.PORT || 8181;

router.get('/api/books', async (ctx) => {
    ctx.body = bookList;
});

server.use(router.routes());
server.use(router.allowedMethods());

if (process.env.NODE_ENV !== 'production') {

    // proxy to webpack-dev-server
    const proxy = require('koa-proxy');
    server.use(proxy({ host: 'http://localhost:8080' }));
}

const instance = server.listen(PORT);

module.exports = instance;

