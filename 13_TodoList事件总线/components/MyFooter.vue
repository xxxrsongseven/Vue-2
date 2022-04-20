<template>
  <div v-show="total" class="todo-footer">
    <label>
      <input type="checkbox" :checked="isAll" @change="selectAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button @click="clearAll" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["lists"],
  computed: {
    total() {
      return this.lists.length;
    },
    doneTotal() {
      return this.lists.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAll() {
      return this.doneTotal === this.total && this.total > 0;
    },
  },
  methods: {
    clearAll() {
      if (confirm("确认要全部删除吗？")) {
        this.$emit('clearAllTodo')
      }
    },
    selectAll(e) {
      this.$emit('checkAllTodo',e.target.checked)
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