require('babel-core/register');

const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const path = require("path");
const fs = require('fs');
// const qs = require('qs');
const mount = require("koa-mount");
// const koaBody = require("koa-body");
const serverStatic = require("koa-static");


app.use(mount('/assets', serverStatic(path.resolve(__dirname, "../assets"))));
app.use(ctx => {
    // ctx.body = "Hello Koa";
    // console.log(ctx)
    if (/\//.test(ctx.url)) {
        ctx.body = fs.readFileSync(path.join(__dirname, "../index.html"), "utf8")
    }
})

//跨域部分配置
app.use(cors({
    origin: "http://localhost:3298",
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });
// app.use(koaBody({ strict: false }));
// app.use(async(ctx, next) => {
//     if (/multipart/.test(ctx.request.headers['content-type'])) {
//         var form = new multiparty.Form();
//         var formData = {};
//         await new Promise((resolve, reject) => {
//             form.on('reject', reject);
//             // form.on('close', resolve);
//             form.on('field', (part, data) => {
//                 formData[part] = data
//                     // debugger;
//             })

//             form.on('file', (name, file) => {
//                 // debugger;
//                 // console.log(file);
//                 formData.file = {
//                     value: fs.createReadStream(file.path),
//                     options: {
//                         filename: file.originalFilename
//                     }
//                 }
//             });
//             form.on('close', () => {

//                 request.post({
//                     url: 'http://192.168.1.235:6200/by-app-web' + ctx.url,
//                     formData: formData
//                 }, (err, response, body) => {
//                     ctx.body = body;
//                     resolve();
//                 });
//             })
//             form.parse(ctx.req);
//         })
//     } else {
//         await new Promise((resolve, reject) => {
//             request({
//                 method: ctx.method,
//                 url: 'http://192.168.1.235:6200/by-app-web' + ctx.url,
//                 headers: {
//                     contentType: 'application/x-www-form-urlencoded',
//                 },
//                 form: ctx.request.body && qs.stringify(qs.parse(ctx.request.body)),
//                 responseType: 'json'
//             }, (err, response, body) => {
//                 ctx.body = body;
//                 resolve();
//             })
//         });
//     };
//     next();
// });

app.listen(3289, (data) => {
    console.log("Page is run http://localhost:3289")
});