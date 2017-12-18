<template>
    <div>
        <head-title></head-title>
        <adder></adder>
        <list :todos="todos"></list>
    </div>      
</template>

<script>
import headTitle from './headTitle'
import adder from './adder'
import list from './list'
import * as types from '../store/mutation-types';
export default {
    mounted () {
        this.$store.dispatch('initialData');
    },
    computed: {
        todos () {
            return this.$store.state.todos;
        } 
    },
    components: {
        headTitle,
        adder,
        list
    }
}
</script>