import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

const VueWrapper = {
  template: '<div id="vue-container"></div>',
  async mounted() {
    await import("../../dist/vue-app/vue-entry.css");
    const { mount } = await import("../../dist/vue-app/vue-entry.js");
    const hash = window.location.hash;
    const match = hash.match(/^#\/vue(\/.*)?$/);
    const vueSubPath = match?.[1] || "/";
    this.vueUnmount = await mount("#vue-container", vueSubPath);
  },
  unmounted() {
    if (this.vueUnmount) this.vueUnmount();
  },
};

const ReactWrapper = {
  template: '<div id="react-container"></div>',
  async mounted() {
    await import("../../dist/react-app/react-entry.css");
    const { mount } = await import("../../dist/react-app/react-entry.js");
    this.reactUnmount = await mount("#react-container");
  },
  unmounted() {
    if (this.reactUnmount) this.reactUnmount();
  },
};

const routes = [
  { path: "/", redirect: "/vue/" },
  { path: "/vue/:pathMatch(.*)*", name: "vue", component: VueWrapper },
  { path: "/react/:pathMatch(.*)*", component: ReactWrapper },
];

const router = createRouter({
  history: createWebHashHistory("/react-vs-vue/"),
  routes,
});

createApp({ template: "<router-view />" }).use(router).mount("#app");
