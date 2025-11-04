<template class="basic-page">
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
  </div>
  <slot></slot>
</template>

<script>
export default {
  name: 'BasicPage', // Optional but recommended for debugging
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
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
