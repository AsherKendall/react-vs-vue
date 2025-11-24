<script setup>
import { ref } from 'vue'

const items = ref([
  { message: 'message1' },
  { message: 'message2' },
  { message: 'message3' },
  { message: 'message4' },
])
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="item.message">{{ index }} - {{ item.message }}</li>
  </ul>
</template>
