<template class="basic-page">
  <div class="greetings">
    <h1>{{ title }}</h1>
  </div>
  <div class="wrapper">
    <slot></slot>
  </div>
  <br />
  <h2>References</h2>
  <ol class="list-none pl-0">
    <li v-for="ref in bibliography" :key="ref.id" v-html="`[${ref.number}] ${ref.text}`"></li>
  </ol>
</template>

<script>
import '@citation-js/plugin-bibtex'
import { inject } from 'vue'

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
  async created() {
    try {
      const citations = inject('citations')
      if (citations) {
        this.bibliography = citations.getBibliography()
      }
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
