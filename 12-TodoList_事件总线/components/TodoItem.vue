<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isFinished" @change="toggleTodo"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        toggleTodo() {
            this.$bus.$emit('toggleTodo', this.todo.id);
        },
        deleteTodo() {
            this.$bus.$emit('deleteTodo', this.todo.id);
        },
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li:hover input {
    display: inline-block;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>