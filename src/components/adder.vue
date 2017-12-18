<template>
    <div>
        <input type="text" @keyup.enter="addTodo" placeholder="请输入添加item" v-model="addText" >
        <button @click="addTodo" >add</button>
    </div>
</template>

<script>
import Bus from '../common/bus';
export default {
    data () {
        return {
            addText: ''
        }
    },
    methods: {
        addTodo () {
            Bus.$emit('addTodo', this.addText);
        }  
    }
}
</script>