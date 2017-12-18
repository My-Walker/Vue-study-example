<template>
    <div>
        <head-title></head-title>
        <adder @addTodo="addTodoHandler"></adder>
        <list :todos="todos" @deleteTodo="deleteTodoHandler"></list>
    </div>      
</template>

<script>
import headTitle from './headTitle'
import adder from './adder'
import list from './list'
import axios from 'axios';
import uuidv4 from 'uuid/v4';
export default {
    created () {
        axios.get('/api/todos')
            .then( (res) => {
                console.log('initData = ', res.data);
                this.todos = res.data;
            })
            .catch( (err) => {
                console.log('initErr = ', err);
            })
    },
    data () {
        return {
            todos: []
        }
    },
    methods: {
        addTodoHandler (val) {
            let id = uuidv4();
            this.todos.push({
                id,
                text: val
            });
            axios.post('/api/addTodo', {
                id,
                text: val
            })
                .then( (res) => {
                    console.log('addRes = ', res);
                })
                .catch( (err) => {
                    console.log('addErr = ', err);
                })
        },
        deleteTodoHandler (val) {
        //    console.log('todoList----------------');
            this.todos = this.todos.filter((item, index, arr) => {
                // 更新到数数据库
                if (item.id === val) {
                    axios.post('/api/deleteTodo', {
                        id: val
                    }) 
                        .then( (res) => {
                            console.log('deleteRes = ', res);
                        })
                        .catch( (err) => {
                            console.log('deleteErr = ', err);
                        })
                }
                return item.id !== val;
            });
        }
    },
    components: {
        headTitle,
        adder,
        list
    }
}
</script>