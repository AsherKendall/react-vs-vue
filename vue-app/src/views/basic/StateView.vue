<script setup>
import GenericPage from '@/components/templates/GenericPage.vue'
// import { inject } from 'vue'
// const citations = inject('citations')
// TODO
// Talk about basic state management things
// Prop drilling and solutions
// Triggered changes & thing of that nature
</script>

<template>
  <main>
    <GenericPage title="State & State Management">
      <h2>WORK IN PROGRESS</h2>
      <h3>Rendering a List</h3>
      <p>
        <a target="_blank" rel="noopener noreferrer" v-ripple href="#/react/list">
          <span class="blue">React List Example </span>
        </a>
        <RouterLink to="/examples/list"><span class="green">Vue List Example </span></RouterLink>
      </p>

      <h2>Property Passing</h2>
      <h3>Solutions to Prop Drilling</h3>
      <p></p>
    </GenericPage>
  </main>
</template>

<style scoped></style>
