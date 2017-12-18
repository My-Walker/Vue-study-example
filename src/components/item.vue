<template>
    <li>
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo">X</button>
    </li>
</template>

<script>
import Bus from '../common/bus';
export default {
    props: ["todo"],
    methods: {
        deleteTodo () {
            // console.log(this.todo.id);
            Bus.$emit('deleteTodo', this.todo.id);
        }
    }
}
</script>