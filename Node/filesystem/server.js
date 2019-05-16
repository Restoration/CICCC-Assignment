const Koa = require('koa');
const fileHandler = require('./fileHandler');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa';
    fileHandler.saveFile();
});

app.listen(3000);
