<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和为:{{ bigSum }}</h1>
    <h1>我在{{ school }}学习{{ subject }}</h1>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script> 
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: { 
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
  /*   increment() {
      this.$store.commit("increment", this.n);
    },
    decrement() {
      this.$store.commit("decrement", this.n);
    }, */

    //借助mapmutations生成对应方法，方法会调用commit去联系mutations（对象写法）
    // ...mapMutations({increment:'increment',decrement:'decrement'}),

    //借助mapmutations生成对应方法，方法会调用commit去联系mutations（数组写法）
    ...mapMutations(['increment','decrement']),
    //
    /* ***************************************************************************** */
 /*    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    }, */

    //借助mapactions生成对应方法，方法会调用dispatch去联系actions（对象写法）
    //...mapActions({ incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),

    ////借助mapactions生成对应方法，方法会调用dispatch去联系actions（数组写法）
    ...mapActions(['incrementOdd','incrementWait'])
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>