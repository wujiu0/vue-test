<template>
  <ul class="todo-main">
    <TodoItem v-for="todoObj in todoList" :key="todoObj.id"
              :todo="todoObj" :toggleTodo="toggleTodo" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    name: 'TodoList',
    props: ['todoList', 'toggleTodo', 'deleteTodo'],
    components: {TodoItem},
};
</script>

<style scoped>

/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>