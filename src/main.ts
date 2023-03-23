// 创建 vue 实例
import { createApp } from "vue";
// 创建 pinia 状态管理的构造函数
import { createPinia } from "pinia";
// 应用入口组件
import App from "./App.vue";
// 路由
import router from "./router";
// UI 组件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/theme.css";
// UI 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./assets/scss/index.scss";
// 设置组件中文显示，如日历的一周从周一开始等，默认为一周从周日开始
// import zhCn from "element-plus/es/locale/lang/zh-cn";
// import "dayjs/locale/zh-cn";
// app.use(ElementPlus, {
//   locale: zhCn,
// });

// 安全策略设置 https://blog.csdn.net/hwytree/article/details/121287531
// process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
// 创建 pinia 状态管理实例
const pinia = createPinia();
// 创建应用
const app = createApp(App);
// 注册 ui 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 挂载路由
app.use(router);
// 挂载 pinia 状态管理
app.use(pinia);
// 挂载 ui 组件库
app.use(ElementPlus);
app.mount("#app");
