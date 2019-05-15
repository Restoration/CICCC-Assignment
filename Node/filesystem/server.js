const Koa = require('koa');
const fs = require('fs');


const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa';
    //saveFile();
    //deleteFile();
});

const saveFile = () => {
    fs.appendFile('./files/mynewfile1.txt', 'Hello content!', (err) => {
        if (err) throw err;
        console.log('Saved!');
    }); 
}

const deleteFile = () => {
    fs.unlink('./files/mynewfile1.txt', (err) => {
        if (err) throw err;
        console.log('Delete!');
    });
}


app.listen(3000);
