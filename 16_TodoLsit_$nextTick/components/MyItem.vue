<template>
  <li>
    <label>
      <input
        :checked="todo.done"
        @click="handleChange(todo.id)"
        type="checkbox"
      />
      <span v-show="!todo.isEdit">{{ todo.name }}</span>
      <input
        type="text"
        @blur="handleBlur(todo,$event)"
        v-show="todo.isEdit"
        :value="todo.name"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="editItem(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(id) {
      //通知app将对应done值取反
      //this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    deleteItem(id) {
      if (confirm("确认删除吗？")) {
        // this.$bus.$emit('deleteTode',id)
        pubsub.publish("deleteTode", id);
      }
    },
    //编辑
    editItem(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调（真正修改逻辑）
    handleBlur(todo,e) {
      todo.isEdit = false;
      if(e.target.value.trim()=='') {return alert('输入不能为空')}else{
      this.$bus.$emit('updateTodo',todo.id,e.target.value)}
    },
  },
  //声明接收对象
  props: ["todo"],
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

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
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