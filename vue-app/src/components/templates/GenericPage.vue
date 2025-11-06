<template class="basic-page">
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
  </div>
  <slot></slot>

  <br />
  <h2 class="green">References</h2>
  <ol class="list-none pl-0">
    <li v-for="item in bibliography" :key="item" v-html="item"></li>
  </ol>
</template>

<script>
import Cite from 'citation-js'
import '@citation-js/plugin-bibtex'

Cite.plugins.add('@citation-js/plugin-bibtex')
export default {
  data() {
    return {
      bibliography: [],
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
      const baseURL = new URL('..', import.meta.url).href
      const response = await fetch(`${baseURL}/vue-app/data/refs.bib`)
      console.log(response)
      const bibtexContent = await response.text()

      const cite = new Cite(bibtexContent)
      const formatted = cite.format('bibliography', {
        template: 'ieee', // Or 'vancouver', 'ieee', etc.
        lang: 'en-US',
      })
      const items = formatted
        .split('\n')
        .filter(Boolean)
        .map((entry) => `${entry}`)

      this.bibliography = items
      console.log(this.bibliography)
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
.list-none {
  counter-reset: my-custom-counter;
  list-style-type: none;
}
ol li::before {
  counter-increment: my-custom-counter; /* Increment the counter for each list item */
  content: '[' counter(my-custom-counter) ']  '; /* Display custom text and counter value */
  font-weight: bold;
}
</style>
