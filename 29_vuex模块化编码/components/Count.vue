<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和为:{{ bigSum }}</h1>
    <h1>{{ school }}学习{{ subject }}</h1>
    <h3 style="color:red">Person组件总人数是:{{person.length}}</h3>
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
    ...mapState("countAbout",['sum','school','subject']),
    ...mapState("personAbout",['person']),
    ...mapGetters("countAbout",['bigSum']),
  },
  methods: {
    ...mapMutations('countAbout',['increment','decrement']),
    ...mapActions('countAbout',['incrementOdd','incrementWait'])
  },
};
</script>

<style>
button {
  margin: 10px;
}
</style>