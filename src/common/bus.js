import Vue from 'vue';
export default new Vue();

// 通过Bus，一个空vue实例，通信的任意两个组件都要import 该bus

// 两个组件分别使用
// Bus.$emit('type', [params])触发type事件
// Bus.$on('type', handler)监听type事件

// 从而实现任意组件之间的通信，如果项目规模不大，可以使用此方法实现跨组件通信