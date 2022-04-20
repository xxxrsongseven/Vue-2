<template>
  <div class="todo-header">
    <input
      type="text"
      @keyup.enter="getMsg"
      v-model="message"
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    getMsg() {
      if (this.message.trim() != "") {
        //将用户的输入包装成为todo对象
        const todoObj = {
          id: nanoid(),
          name: this.message,
          done: false,
        };
        //通知App组件添加一个todo对象
        this.$emit('addTodo',todoObj)
        //清空输出
        this.message = "";
      } else {
        alert('请输入任务名!')
      }
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
