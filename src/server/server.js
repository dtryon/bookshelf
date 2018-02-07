const Koa = require('koa');
const Router = require('koa-router');

const bookList = require('./booklist/data.json');
const render = require('./views/render');

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

router.get('/:bookId?', ctx => {
    ctx.body = render();
});

server.use(router.routes());
server.use(router.allowedMethods());


const instance = server.listen(PORT);

module.exports = instance;

