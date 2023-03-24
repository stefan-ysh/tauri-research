<script setup lang="ts">
import { useTheme } from "vuetify";
import { computed, ref } from "vue";
import { useThemeStore } from "./stores";
import Calendar from "./views/Calendar.vue";
// import { Calendar } from "v-calendar";
// import "v-calendar/style.css";

const themeStore = useThemeStore();
const theme = useTheme();
const msg = ref("hello world");
const changeMsg = () => {
  msg.value = "welcome";
};

const date = ref(new Date());
const selectedColor = ref("red");
// 切换主题值
const toggleTheme = computed({
  get() {
    return theme.global.current.value.dark;
  },
  set() {
    theme.global.name.value = theme.global.current.value.dark
      ? "light"
      : "dark";
  },
});

// 改变主题并修改store
const changeTheme = (e: any) => {
  // 获取switch 值
  const value = e.target.checked;
  const t = value ? "dark" : "light";
  // 切换主题
  themeStore.changeTheme(t);
};
const items = [
  { title: "item 1" },
  { title: "item 2" },
  { title: "item 3" },
  { title: "item 4" },
];
const handleMenu = (item: any) => {
  console.log(item);
};
</script>

<template>
  <v-app>
    <v-card color="grey-lighten-4" flat rounded="0">
      <v-toolbar density="compact">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="handleMenu(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-switch @change="changeTheme" v-model="toggleTheme" hide-details />
        </v-btn>
        <!-- <v-btn icon>
          <v-icon>mdi-window-minimize</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-window-maximize</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-window-restore</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-window-close</v-icon>
        </v-btn> -->
      </v-toolbar>
    </v-card>

    <!-- <v-btn @click="changeMsg" prepend-icon="mdi-account" variant="plain">
      Button
      <v-icon>mdi-account</v-icon>
    </v-btn> -->
    <v-main>
      <!-- <v-text-field v-model="msg" /> -->
      <!-- show-weeknumbers="left-outside" -->
      <Calendar />
      <!-- <Calendar
        expanded
        view="monthly"
        show-weeknumbers
        :color="selectedColor"
        title-position="left"
        :is-dark="themeStore.theme === 'dark'"
        v-model="date"
      /> -->
    </v-main>
  </v-app>
</template>
