<template>
  <div>
    <button @click="getStudents">得到学生</button>
    <button @click="getCars">得到汽车</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    //配置中写'proxy:{/api':{target:'http://localhost:5000',pathRewrite:{'^/api':''}},
    getCars() {
      axios.get("http://localhost:8080/foo/cars").then(
        function (res) {
          console.log(res.data);
        },
        function (err) {
          console.log("请求失败了！" + err.message);
        }
      );
    },
    getStudents() {
      //vue.config.js中写入 devServer:{proxy:'http://localhost:5000'}
      axios.get("http://localhost:8080/api/students").then(
        function (res) {
          console.log(res.data);
        },
        function (err) {
          console.log("请求失败了！" + err.message);
        }
      );
    },
  },
};
</script>

<style>
</style>