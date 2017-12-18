const Router = require('koa-router');
const todo = require('./todo-info');

const router = Router();
// console.log(todo);
router.use(todo.routes(), todo.allowedMethods());

// console.log('111');
module.exports = router;