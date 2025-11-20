<script setup></script>

<template>
  <div class="greetings">
    <h1><span class="blue">React</span> Vs. <span class="green">Vue</span> Comparison Website</h1>
  </div>
  <p>
    This a website for the comparison of the two web solutions
    <a class="blue" href="https://react.dev/">React</a> and
    <a class="green" href="https://vuejs.org/">Vue.js.</a>
  </p>
  <h2>Frameworks</h2>
  <h3 class="blue">React</h3>
  <h4>Version:"^19.2.0"</h4>
  <p>
    React is a javascript library for web applications used to create user interfaces and
    components. It is not a web framework as it focuses only on the view layer and component-based
    architecture.
  </p>

  <h3 class="green">Vue</h3>
  <h4>Version:"^3.5.24"</h4>
  <p>
    Vue is a javascript web framework for making user interfaces. This framework follows a
    Model-View-ViewModel architectural pattern.
  </p>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
