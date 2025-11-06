<template class="basic-page">
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
  </div>
  <slot></slot>
  <div v-html="bibliography"></div>
</template>

<script>
import { Cite, plugins } from '@citation-js/core'
import '@citation-js/plugin-bibtex'

plugins.add('@citation-js/plugin-bibtex')
export default {
  data() {
    return {
      bibliography: '',
    }
  },
  name: 'BasicPage', // Optional but recommended for debugging
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
  },
  async mounted() {
    try {
      const response = await fetch('/react-vs-vue/#/refs.bib')
      const bibtexContent = await response.text()
      console.log(bibtexContent)

      const cite = new Cite(bibtexContent)
      this.bibliography = cite.format('bibliography', {
        format: 'html',
        template: 'ieee', // Or 'vancouver', 'ieee', etc.
        lang: 'en-US',
      })
    } catch (error) {
      console.error('Error loading or parsing BibTeX:', error)
      console.error(error.message)
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
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
</style>
