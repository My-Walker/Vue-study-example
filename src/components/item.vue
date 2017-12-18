<template>
    <li>
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo">X</button>
    </li>
</template>

<script>
    export default {
        props: ["todo"],
        methods: {
            deleteTodo () {
                // console.log(this.todo.id);
                this.$emit('deleteTodo', this.todo.id);
            }
        }
    }
</script>