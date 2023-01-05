<script setup>
import { useCounterStore } from "./stores/counter.js";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { getData } = store;
const { data } = storeToRefs(store);

getData();
// 問題在這邊，第一次進到面看得到data.value的值
// 但是重新整理會取不到data.value的值   2.這邊會是一個 Proxy{}
console.log(data, 1);
console.log(data.value, 2);
</script>

<template>
  <h1>pinia問題: data.value取不到資料</h1>
  <h3>{{ data.value }}</h3>
</template>
