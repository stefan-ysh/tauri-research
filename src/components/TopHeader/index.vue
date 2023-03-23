<template>
  <nav
    style="width: 100%"
    class="header-toolbar"
    @dblclick.self="toggleFullScreen"
  >
    <div class="header-toolbar__left">
      <left-menu />
    </div>
    <div class="header-toolbar__right">
      <right-menu />
    </div>
  </nav>
</template>
<script setup lang="ts">
import LeftMenu from "./left-menu.vue";
import RightMenu from "./right-menu.vue";
import { permissionStore } from "../../stores";
const permission = permissionStore();

// 全屏切换
const toggleFullScreen = () => {
  permission.toggleFullScreen();
};
</script>

<style scoped lang="less">
.header-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(138, 107, 107);
  background: var(--el-fill-color-blank);
  &__left {
  }
  &__right {
    display: flex;
    align-items: center;
  }
}
</style>
