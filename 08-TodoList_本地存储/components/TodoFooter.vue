<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="allChecked"/>
    </label>
    <span>
          <span>已完成{{ finished }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearTodoList">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    props: ['todoList', 'clearTodoList', 'toggleTodoAll'],
    computed: {
        finished() {
            return this.todoList.reduce((pre, current) => {
                return pre + (current.isFinished ? 1 : 0);
            }, 0);
        },
        total() {
            return this.todoList.length;
        },
        allChecked: {
            get() {
                return this.finished === this.total;
            },
            set(value) {
                this.toggleTodoAll(value);
            },
        },
    },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>