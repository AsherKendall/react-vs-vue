<script setup>
import { inject, defineProps } from 'vue'
const citations = inject('citations')
const bibliography = citations.getBibliography()
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Default Title',
  },
})

console.log(citations.getBibliography())
</script>

<template class="basic-page">
  <div class="greetings">
    <h1>{{ title }}</h1>
  </div>
  <div class="wrapper">
    <slot></slot>
  </div>
  <br />
  <h2 v-once>References</h2>
  <ul class="list-none pl-0">
    <li v-for="item in bibliography" :key="item.number">
      {{ `[${item.number}] ${item.text}` }}
    </li>
  </ul>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.list-none {
  list-style-type: none;
}
</style>
