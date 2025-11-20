<script setup>
import GenericPage from '@/components/templates/GenericPage.vue'
import hljs from 'highlight.js'
import { inject } from 'vue'
const citations = inject('citations')
</script>

<template>
  <main>
    <GenericPage title="How to Start Project for Each Solution">
      <h2 class="blue">React Install</h2>
      <p>These commands should allow you to start a React project easily on your local machine.</p>
      <h3 class="blue">Install Node.js</h3>
      <p>
        Vite requires that you have either 20.19+ or 22,12+ versions of Node.js installed [{{
          citations.getCitationNumber('createVite')
        }}].
      </p>

      <h3 class="blue">Create Basic Project with Vite</h3>
      <p>Start project using the `create-vite` package:</p>
      <highlightjs
        language="bash"
        code="npm create vite@latest your-app-name -- --template react"
      />
      <p>Change directory to the project's directory:</p>
      <highlightjs language="bash" code="cd your-app-name" />
      <p>Install all project packages:</p>
      <highlightjs language="bash" code="npm install" />
      <p>Start the local Development Server:</p>
      <highlightjs language="bash" code="npm run dev" />

      <h2 class="green">Vue Install</h2>
      <h3 class="green">Install Node.js</h3>
      <p>
        Vite requires that you have either 20.19+ or 22,12+ versions of Node.js installed [{{
          citations.getCitationNumber('createVite')
        }}].
      </p>
      <h3 class="green">Create Basic Project with Vite</h3>
      <p>Start project using the `create-vite` package:</p>
      <highlightjs language="bash" code="npm create vite@latest my-vue-app -- --template vue" />
      <p>Change directory to the project's directory:</p>
      <highlightjs language="bash" code="cd my-vue-app" />
      <p>Install all project packages:</p>
      <highlightjs language="bash" code="npm install" />
      <p>Start the local Development Server:</p>
      <highlightjs language="bash" code="npm run dev" />
    </GenericPage>
  </main>
</template>

<script>
hljs.initHighlightingOnLoad()
</script>
