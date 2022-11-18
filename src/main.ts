import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { createRouter } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";

import vuetify from "./plugins/vuetify";
import "./assets/main.css";

const routes = setupLayouts(generatedRoutes);
console.log("--------------------");
console.log("generatedRoutes", generatedRoutes);
console.log("routes", routes);

console.log("--------------------");
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: generatedRoutes, base: import.meta.env.BASE_URL },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    app.use(createPinia());
    app.use(vuetify);
  }
);
