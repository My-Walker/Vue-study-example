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
                this.$store.dispatch('deleteTodo', this.todo.id);
            }
        }
    }
</script>