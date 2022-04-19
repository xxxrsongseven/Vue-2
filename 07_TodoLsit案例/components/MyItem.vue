<template>
  <li>
    <label>
      <input :checked="todo.done" @click="handleChange(todo.id)" type="checkbox" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      handleChange(id){
          //通知app将对应done值取反
          this.checkTodo(id)
      },
      deleteItem(){
          if(confirm('确认删除吗？')){
            //通知app删除一个todo
            this.deleteTode(this.todo.id)
          }
          
      }
  },
  //声明接收对象
  props:['todo','checkTodo','deleteTode']
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
li:hover{
    background-color: #ddd;
}
li:hover button {
    display: block;
}
</style>