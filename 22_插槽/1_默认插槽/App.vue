<template>
  <div>
    <div class="container">
      <Category title="美食">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
      </Category>
      <Category title="游戏">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </Category>
      <Category title="电影">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["英雄联盟", "穿越火线", "逆战", "QQ飞车"],
      films: ["《教父》", "《绿野仙踪》", "《人在囧途》", "《绿皮书》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

</style>