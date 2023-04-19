<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/>
      <TodoList :todoList="todoList"/>
      <TodoFooter :todoList="todoList"
                  @clearTodoList="clearTodoList"
                  @toggleTodoAll="toggleTodoAll"/>
    </div>
  </div>
</template>

<script>
import TodoFooter from '@/components/TodoFooter.vue';
import TodoList from '@/components/TodoList.vue';
import TodoHeader from '@/components/TodoHeader.vue';

export default {
    name: 'App',
    components: {TodoHeader, TodoList, TodoFooter},
    data() {
        return {
            todoList: JSON.parse(localStorage.getItem('todoList')) || [],
        };
    },

    watch: {
        'todoList': {
            deep: true,
            handler(newVal) {
                localStorage.setItem('todoList', JSON.stringify(newVal));
            },
        },
    },
    methods: {
        addTodo(todoObj) {
            if (todoObj)
                this.todoList.unshift(todoObj);
        },
        toggleTodo(id) {
            this.todoList.forEach((todo) => {
                if (todo.id === id) todo.isFinished = !todo.isFinished;
            });
        },
        toggleTodoAll(value) {
            this.todoList.forEach((todo) => {
                todo.isFinished = value;
            });
        },
        deleteTodo(id) {
            this.todoList = this.todoList.filter((todo) => {
                return todo.id !== id;
            });
        },
        editTodo(id, val) {
            this.todoList.forEach((todo) => {
                if (todo.id === id) {
                    todo.title = val;
                }
            });
        },
        clearTodoList() {
            this.todoList = this.todoList.filter((todo) => {
                return !todo.isFinished;
            });
        },
    },
    mounted() {
        this.$bus.$on('toggleTodo', this.toggleTodo);
        this.$bus.$on('deleteTodo', this.deleteTodo);
        this.$bus.$on('editTodo', this.editTodo);

    },
};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn-edit {
    color: #fff;
    background-color: #20aff1;
    border: 1px solid #2f7dbd;
    margin-right: 5px;
}

.btn-edit:hover {
    color: #fff;
    background-color: #0095ff;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}


</style>