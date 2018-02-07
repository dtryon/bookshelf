import Koa from 'koa';
import Router from 'koa-router';

import bookList from './booklist/data.json';
import render from './views/render';

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
    ctx.body = render(ctx.originalUrl, bookList);
});

server.use(router.routes());
server.use(router.allowedMethods());

const instance = server.listen(PORT);

export default instance;

