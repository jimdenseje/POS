<script setup>
import { ref, onMounted } from 'vue'
import HeaderMenu from '@/components/HeaderMenu.vue';
import { stock } from '@/components/classes/stock.js';

function increment() {
  let item1 = stock.add("cake", 100);
  let item2 = stock.add("banana", 100);
  item1.name = "apple";
  //stock.list().push("noNo"); //How to make sure this is not possible
  //item2.remove();

}

</script>

<template>
  <HeaderMenu/>
  <h3>Admin</h3>
  <button @click="increment"></button>
</template>