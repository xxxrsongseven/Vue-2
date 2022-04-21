<template>
  <div>
    <div class="container">
      <Category title="美食">
        <img
          slot="center"
          src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
          alt=""
        />
        <a slot="footer" href="#">更多美食</a>
      </Category>
      <Category title="游戏">
        <ul slot="center">
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
        <!-- slot可以写多个 -->
        <div slot="footer" class="foot">
          <a href="#">单机游戏</a>
          <a href="#">网络游戏</a>
        </div>
      </Category>
      <Category title="电影">
        <video
          slot="center"
          controls
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        ></video>
        <!-- 只能在template中写v-slot -->
        <template v-slot:footer>
          <div class="foot">
            <a href="#">经典</a>
            <a href="#">热门</a>
            <a href="#">推荐</a>
          </div>
          <h4>欢迎前往影院观看</h4>
        </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>