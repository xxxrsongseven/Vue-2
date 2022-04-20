<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :lists="lists"
          :checkTodo="checkTodo"
          :deleteTode="deleteTode"
        />
        <MyFooter
          :lists="lists"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
//相同名称样式根据先后引入决定，后引入的决定
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  data() {
    return {
      lists:JSON.parse(localStorage.getItem('msg')) || []
    };
  },
  methods: {
    //添加一个tode
    addTodo(x) {
      this.lists.unshift(x);
    },
    //勾选or取消一个todo
    checkTodo(id) {
      this.lists.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTode(id) {
      this.lists = this.lists.filter((lists) => lists.id !== id);
    },
    checkAllTodo(done) {
      this.lists.forEach((lists) => (lists.done = done));
    },
    clearAllTodo() {
      this.lists = this.lists.filter((todo) => {
        return !todo.done;
      });
    },
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  watch:{
    lists:{
      deep:true,
      handler(newVal){
      localStorage.setItem('msg',JSON.stringify(newVal))

      }
    }
  }
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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
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