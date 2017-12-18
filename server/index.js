const Koa = require('koa');
const routes = require('./routers');
const path = require('path');
// const koaStaticServer = require('koa-static-server')
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const config = require('./serverConfig')

const app = new Koa();
// 服务器启动用时
app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 配置静态资源加载中间件
app.use(koaStatic(
	path.join(__dirname , '../dist')
))
// ctx.body解析中间件,post
app.use(bodyParser());
//  初始化路由中间件
app.use(routes.routes(), routes.allowedMethods());

app.on('error', (err, ctx) => {
    console.log('some error is happened', err);
});

app.listen(config.port, () => {
    console.log(`server is running at port ${config.port}......`);
})