<template>
  <div class="demo">
    <img src="../assets/logo.png" alt="" />
    <h2>学校名称：{{ SchoolName }}</h2>
    <h2>学校地址：{{ Adress }}</h2>
    <button @click="ShowSchoolName">点我提示学校</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SchoolName: "西安文理学院",
      Adress: "科技六路",
    };
  },
  methods: {
    ShowSchoolName() {
      console.log(this);
      alert(this.SchoolName);
    },
  },
};
</script>

<style>
.demo {
  background-color: aqua;
}
</style>