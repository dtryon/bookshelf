const Koa = require('koa');
const Router = require('koa-router');
const send = require('koa-send');

const bookList = require('./booklist/data.json');

const server = new Koa();
const router = new Router();

const PORT = process.env.PORT || 8181;

if (process.env.NODE_ENV !== 'production') {
    // proxy to webpack-dev-server
    const proxy = require('koa-proxy');
    server.use(proxy({
        host: 'http://localhost:8080',
        match: /^\/assets\//
    }));
}

router.get('/api/books', ctx => {
    ctx.body = bookList;
});

router.get('/:bookId?', async ctx => {
    await send(ctx, 'index.html', { root: __dirname + '/views' });
});

server.use(router.routes());
server.use(router.allowedMethods());


const instance = server.listen(PORT);

module.exports = instance;

