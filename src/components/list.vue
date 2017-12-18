<template>
    <ul>
        <li is="item" v-for="todo in todos" :todo="todo" :key="todo.id" @deleteTodo="deleteTodoHandler"></li>
    </ul>
</template>

<script>
// const item = require('./item');
import item from './item'
export default {
    props: ["todos"],
    components: {
        item
    },
    methods: {
        deleteTodoHandler (val) {
            this.$emit('deleteTodo', val);
            // console.log('list-------');
        }
    }
}
</script>