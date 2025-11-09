<script setup>
import GenericPage from '@/components/templates/GenericPage.vue'
import hljs from 'highlight.js'
</script>

<template>
  <main>
    <GenericPage title="How to Start Project for Each Solution">
      <div>This is some content</div>

      <h2 class="green">React Install</h2>
      <h3 class="green">Install Node.js</h3>
      <h3 class="green">Create Basic Project with Vite</h3>

      <highlightjs language="bash" code="npm create vite@latest" />
    </GenericPage>
  </main>
</template>

<script>
hljs.initHighlightingOnLoad()
</script>
