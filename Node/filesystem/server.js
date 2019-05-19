const Koa = require('koa');
const fileHandler = require('./fileHandler');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa';
    let name = 'Hello';
    let content = 'Hello Koa';
    fileHandler.saveFile(name, content);

    //fileHandler.readDir();
    //fileHandler.renameFile('undefined','foo.txt');
});

app.listen(3000);
