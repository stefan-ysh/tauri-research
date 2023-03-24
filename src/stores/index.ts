// export * from "./settings";
// export * from "./ftl";
// export * from "./permission";
// export * from "./iv";
import { defineStore } from "pinia";

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
  }),
  actions: {
    changeTheme(t: "light" | "dark") {
      this.theme = t;
      localStorage.setItem("theme", t);
    },
  },
});
