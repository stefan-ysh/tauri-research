import { createApp, provide } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { setupCalendar } from "v-calendar";
const defaultTheme = localStorage.getItem("theme") || "light";
const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme },
});
const app = createApp(App);
// Use calendar defaults (optional)
app.use(setupCalendar, {}).use(pinia).use(vuetify).mount("#app");
