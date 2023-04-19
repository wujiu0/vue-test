<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isFinished" @change="toggleTodo"/>
      <input
              type="text"
              ref="inputTitle"
              v-show="todo.isEdit"
              @blur="handleBlur($event)"
              @keydown.enter="$refs.inputTitle.blur()"
              :value="todo.title"
      >
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo">删除</button>
    <button class="btn btn-edit" @click="handleEdit">编辑</button>
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
        handleEdit() {
            if (!this.todo.hasOwnProperty('isEdit')) {
                this.$set(this.todo, 'isEdit', true);
            } else {
                this.todo.isEdit = true;
            }
            this.$nextTick(() => {
                    this.$refs.inputTitle.focus();
                },
            );
        },
        handleBlur(e) {
            this.todo.isEdit = false;
            if (!e.target.value.trim()) {
                return alert('输入不能为空');
            }
            this.$bus.$emit('editTodo', this.todo.id, e.target.value);
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