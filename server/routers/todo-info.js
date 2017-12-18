// import Router from 'koa-router';
// import axios from 'axios';
// import todo from './../services/todo-info';
const Router = require('koa-router');
const axios = require('axios');
const {todoInfo} = require('../controllers/index');
const type = require('../utils/type');
const router = Router();

router.get('/api/todos', todoInfo.getAllTodos)
    .get('/', todoInfo.rootTodoList)
    .post('/api/addTodo', todoInfo.addTodo)
    .post('/api/deleteTodo', todoInfo.deleteTodoById);


module.exports = router;