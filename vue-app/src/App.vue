<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
import { Menubar } from 'primevue'

const items = [
  {
    label: 'Home',
    route: '/',
    icon: 'pi pi-home',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'React',
    url: '#/react',
  },
  {
    label: 'Basic Features',
    items: [
      {
        label: 'State Management',
        icon: 'pi pi-wrench',
        route: '/basic/state',
      },
      {
        label: 'Routing',
        icon: 'pi pi-map-marker',
        route: '/basic/routing',
      },
    ],
  },
]
</script>

<template>
  <header>
    <Menubar id="menubar" :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span v-if="item.icon" :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </RouterLink>
        <a v-ripple v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
body {
  padding-top: 50px;
}
.p-menubar {
  padding: 0px;
  height: 50px;
}
#menubar {
  position: fixed;
  left: 1px;
  top: 0;
  width: 100%;
  padding: 0;
  z-index: 1000;
}
a span {
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
